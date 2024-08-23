<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function saveEvento(Request $request){
        $evento = new Evento();
        $evento->evento = $request->evento;
        $evento->categorita_id = $request->categorita_id;
        $evento->save();

        if(!$evento){
        return response()->json(['message'=>'not save']);
        }

        return response()->json(['evento'=>$evento]);
    }
    

    public function obtenerEvento($id){
        $eventos = Evento::where('categorita_id',$id)->get();

        if(!$eventos){
            return response()->json(['message'=>'not fount']);
            }
    
        return response()->json(['eventos'=>$eventos]);
    }
}
