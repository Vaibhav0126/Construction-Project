<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //return all active service
    public function index()
    {
        $services = Service::where("status", 1)->orderBy("created_at", "desc")->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    //latest active service
    public function latestServices(request $request)
    {
        $services = Service::where("status", 1)->take($request->get('limit'))->orderBy("created_at", "desc")->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }
}