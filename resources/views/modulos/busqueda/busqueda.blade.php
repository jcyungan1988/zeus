@extends('templates.main')
@section('php')
<?php

?>
@endsection
@section('css')

@endsection
@section('content')
<!-- start: PAGE HEADER -->
  <!-- ============================================================== -->
  <!-- Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <div class="row page-titles">
      <div class="col-md-5 col-8 align-self-center">
          <h3 class="text-themecolor">Zeus</h3>
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="{{ url('/home') }}">Home</a></li>
              <li class="breadcrumb-item active">Busqueda</li>
          </ol>
      </div>
  </div>
  <!-- ============================================================== -->
  <!-- End Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->

  <!-- Row -->
  <div class="row">

      <div class="col-lg-12">
          <div class="card">
              <div class="card-body">
                  <!-- <h4 class="card-title">Busqueda</h4> -->
                  <!-- Inicio Formulario Busquedas -->
                  <form class="form-material m-t-40">
                    <div class="col-lg-6">
                      <div class="form-group">
                          <div class="collapse m-t-15" id="tt10" aria-expanded="true">
                            <code>&lt;a class="mytooltip" href="javascript:void(0)"&gt;
                                  &lt;i class="fa fa-fw fa-car"&gt;&lt;/i&gt;Car
                                  &lt;span class="tooltip-content3">You can easily navigate the city by car.&lt;/span&gt;
                                  &lt;/a&gt;
                            </code>
                          </div>
                          <a class="mytooltip" href="javascript:void(0)">
                            <input type="text" class="form-control form-control-line" value="">
                            <span class="tooltip-content3">Ingrese tema para realizar su busqueda.</span>

                          </a>
                      </div>
                      <div class="input-group-append">
                          <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Busqueda</button>
                      </div>
                    </div>
                    </form>
                  <!-- Fin Formulario Busquedas -->
              </div>
              <!-- ============================================================== -->
              <!-- Dashboard Resultados widgets -->
              <!-- ============================================================== -->
              <div class="comment-widgets">
                  <!-- Comment Row -->

                  <!-- Comment Row -->
              </div>
          </div>
      </div>

  </div>
  <!-- Row -->
<!-- end: PAGE CONTENT -->
@endsection
@section('js')

@endsection
@section('ready-js')

@endsection
