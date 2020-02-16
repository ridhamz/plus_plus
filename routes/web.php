<?php
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/userinfo',function(){
    return auth()->user();
});

Route::get('/allusers',function(){
      $data = DB::table('users')->where('user_type','user')->get();
      return $data;
});
Route::get('/Users',function(){
      $data = \App\User::where('user_type','user')->paginate(3);
      return $data;
});
 Route::post('/addfeedback',function(){
    $f = new \App\feedback;
   $f->user_id = 2;
   $f->description =Request('t3');
   $f->type_problem= Request('t1');
   $f->level_problem = Request('t2');


 });

 Route::get('/user_details/{id}',function($id){
$data =\App\Feedback::find($id);
return $data;
});

