<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class doctor extends Controller
{
    public function getusers(){
    $users = User::paginate(5);
     return $users;
    }
}
