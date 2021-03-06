import React, { Component } from 'react';
import MediaHandler from '../MediaHandler';
import Pusher from 'pusher-js';
import Peer from 'simple-peer';

const APP_KEY = '83c9614fa128f8d6027a';

export default class Chat extends Component {
    constructor() {
        super();
        this.state = {
            hasMedia: false,
            otherUserId: null,
            startchat:true,
            endchat:true
        };

        this.user = window.user;
        this.user.stream = null;
        this.peers = {};

        this.mediaHandler = new MediaHandler();
        this.setupPusher();

        this.callTo = this.callTo.bind(this);
        this.setupPusher = this.setupPusher.bind(this);
        this.startPeer = this.startPeer.bind(this);
        //this.stratAppel = this.stratAppel.bind(this);
    }

    componentWillMount(){
        this.mediaHandler.getPermissions()
            .then((stream) => {
                this.setState({hasMedia: true});
                this.user.stream = stream;

                try {
                    this.myVideo.srcObject = stream;
                } catch (e) {
                    this.myVideo.src = URL.createObjectURL(stream);
                }

                this.myVideo.play();
            })
    }

    setupPusher() {
        this.pusher = new Pusher(APP_KEY, {
            authEndpoint: '/pusher/auth',
            cluster: 'ap2',
            auth: {
                params: this.user.id,
                headers: {
                    'X-CSRF-Token': window.csrfToken
                }
            }
        });

        this.channel = this.pusher.subscribe('presence-video-channel');

        this.channel.bind(`client-signal-${this.user.id}`, (signal) => {
            let peer = this.peers[signal.userId];

            // if peer is not already exists, we got an incoming call
            if(peer === undefined) {
                this.setState({otherUserId: signal.userId});
                peer = this.startPeer(signal.userId, false);
            }

            peer.signal(signal.data);
        });
    }

    startPeer(userId, initiator = true) {
        const peer = new Peer({
            initiator,
            stream: this.user.stream,
            trickle: false
        });

        peer.on('signal', (data) => {
            this.channel.trigger(`client-signal-${userId}`, {
                type: 'signal',
                userId: this.user.id,
                data: data
            });
        });

        peer.on('stream', (stream) => {
            try {
                this.userVideo.srcObject = stream;
            } catch (e) {
                this.userVideo.src = URL.createObjectURL(stream);
            }

            this.userVideo.play();
        });

        peer.on('close', () => {
            let peer = this.peers[userId];
            if(peer !== undefined) {
                peer.destroy();
            }

            this.peers[userId] = undefined;
        });

        return peer;
    }

    callTo(userId=null) {
       // this.peers[userId] = this.startPeer(userId);
       this.setState({endchat:false})
       this.mediaHandler.getPermissions()
            .then((stream) => {
                this.setState({hasMedia: true});
                this.user.stream = stream;

                try {
                    this.userVideo.srcObject = stream;
                } catch (e) {
                    this.userVideo.src = URL.createObjectURL(stream);
                }

                this.userVideo.play();
            })

    }

    render() {
        return (
            <div className="App">

                <div className="video-container">

                    <video className="my-video" ref={(ref) => {
                        if(this.state.startchat)
                         this.myVideo = ref;
                         else
                           this.myVideo = null
                        }}>
                        </video>

                    <video className="user-video" ref={(ref) => {
                        if(this.state.endchat)
                       this.userVideo = null
                       else
                          this.userVideo = ref


                        }}
                        >
                        </video><br/>
                </div>
                 { this.state.endchat ?
                     <button onClick={()=>this.callTo()}>Start Chat</button>
                     : <button onClick={()=>this.setState({endchat:false,startchat:false})}>End Chat</button>
                 }
            </div>
        );
    }
}


