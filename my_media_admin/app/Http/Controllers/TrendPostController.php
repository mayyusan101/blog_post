<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\ActionLog;
use Illuminate\Http\Request;

class TrendPostController extends Controller
{
    //direct trend post
    public function index(){

        $trendPosts = ActionLog::select('action_logs.*','posts.*')
                                ->join('posts','posts.post_id','action_logs.post_id')
                                ->orderBy('action_logs.view','desc')
                                ->paginate(3);
        return view('admin.trend_post.index',compact('trendPosts'));
    }
    //detail trend post
    public function detailPost($id){

        $post = Post::where('post_id',$id)->first();
        return view('admin.trend_post.detail',compact('post'));
    }
}
