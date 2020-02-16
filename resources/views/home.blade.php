@extends('layouts.app')

@section('content')
@if(auth()->user()->user_type=='doctor')
<div  id={{auth()->user()->user_type}}  class="col-md-8">

</div>
@else
<div  id={{auth()->user()->user_type}}>

</div>
@endif
@endsection
