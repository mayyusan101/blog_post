<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //user login  and release token
    public function login(Request $request)
    {
        //email password
        $user = User::where('email', $request->email)->first();

        if (isset($user)) {
            if (Hash::check($request->password, $user->password)) {
                return response()->json([
                    'user' => $user,
                    'token' => $user->createToken(time())->plainTextToken
                ]);
            } else {
                return response()->json([
                    'user' => null,
                    'token' => null
                ]);
            }
        } else {
            return response()->json([
                'user' => null,
                'token' => null
            ]);
        }
    }
    //register
    public function register(Request $request)
    {


        $isHas = User::where('email', $request->email)->first();
        if ($isHas) {
            return response()->json([
                'message' => 'This account is already exist'
            ]);
        }
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'gender' => $request->gender,
            'role' => 'user'
        ];
        logger($data);
        User::create($data);
        $user = User::where('email', $request->email)->first();
        return response()->json([
            'user' => $user,
            'token' => $user->createToken(time())->plainTextToken
        ]);
    }
}
