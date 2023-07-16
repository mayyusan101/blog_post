<?php

namespace App\Http\Controllers\Api;

use App\Models\ActionLog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ActionLogController extends Controller
{
    //view data
    public function viewCout(Request $request){

        $ckeckPost = ActionLog::where('post_id',$request->post_id)->first();//check if post exsit already or not
        if($ckeckPost){
            $views = $ckeckPost->view + 1;
            ActionLog::where('post_id',$request->post_id)->update([
                'user_id' => $request->user_id,
                'post_id' => $request->post_id,
                'view' => $views                //if post exists, increase the views
            ]);
        }else{
           ActionLog::create([
            'user_id' => $request->user_id,
            'post_id' => $request->post_id,
            'view' => 1                         //put 1 for very first view
           ]);
        }
        $viewCount = ActionLog::select('view')->where('post_id',$request->post_id)->first();
        return response()->json([
            'status' => 'success',
            'view' => $viewCount->view
        ]);
    }
}
