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
              <li class="breadcrumb-item active">Influencers</li>
          </ol>
      </div>
  </div>
  <!-- ============================================================== -->
  <!-- End Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->

  <!-- Row -->
  <div class="row">
      <div class="col-lg-6">
          <div class="card">
              <div class="card-body">
                  <div class="table-responsive">
                      <table class="table color-table info-table">
                          <thead>
                              <tr>
                                  <th> </th>
                                  <th>Influencer</th>
                                  <th> </th>
                                  <th># Post</th>
                                  <th>Username</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td><img src="assets/images/users/4.jpg" alt="user" width="40" class="img-circle" /></td>
                                  <td>Nigam</td>
                                  <td><img src="assets/images/icon/facebook.png" alt="user" width="40" class="img-circle" /></td>
                                  <td>1</td>
                                  <td>@Sonu</td>
                              </tr>
                              <tr>
                                  <td><img src="assets/images/users/5.jpg" alt="user" width="40" class="img-circle" /></td>
                                  <td>Deshmukh</td>
                                  <td><img src="assets/images/icon/twitter.png" alt="user" width="40" class="img-circle" /></td>
                                  <td>3</td>
                                  <td>@Genelia</td>
                              </tr>
                              <tr>
                                  <td><img src="assets/images/users/6.jpg" alt="user" width="40" class="img-circle" /></td>
                                  <td>Roshan</td>
                                  <td><img src="assets/images/icon/instagram.png" alt="user" width="40" class="img-circle" /></td>
                                  <td>2</td>
                                  <td>@Hritik</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Gráfico de Pastel</h4>
                </div>
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
