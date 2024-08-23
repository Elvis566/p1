<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function saveCategoria(Request $request){
        $categoria = new Categoria();
        $categoria->categoria = $request->categoria;
        $categoria->save();

        if(!$categoria){
        return response()->json(['message'=>'not save']);
        }

        return response()->json(['categoria'=>$categoria]);
    }

    public function obtenerCategoria(){
        $categorias = Categoria::all();

        if(!$categorias){
            return response()->json(['message'=>'not fount']);
            }
    
        return response()->json(['categorias'=>$categorias]);
    }
}
