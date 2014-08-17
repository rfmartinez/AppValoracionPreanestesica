// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('AppAnestesiologia', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/', 
    //If in a folder, template/welcome.html    
    templateUrl: 'templates/home.html',
    //controller: 'WelcomeController'
  })
  .state('torax', { 
    url: '/torax', 
    //If in a folder, template/login.html
    templateUrl: 'templates/torax.html',
    controller: 'ToraxCtrl'
  })
  .state('general', { 
    url: '/general', 
    //If in a folder, template/login.html
    templateUrl: 'templates/general.html',
    controller: 'GeneralCtrl'
  })
  .state('colorectal', { 
    url: '/colorectal', 
    //If in a folder, template/login.html
    templateUrl: 'templates/colorectal.html',
    controller: 'ColorectalCtrl'
  })
 

  $urlRouterProvider.otherwise("/");
})
.controller('ToraxCtrl', function($scope,$ionicPopup) {

  $scope.factoresRiesgo = {"cxAltoRiesgo":false,
                           "eventoIsquemico":false,
                           "insuficienciaCardiaca":false,
                           "enfermedadCerebroVascular":false,
                           "diabetesInsulino":false,
                           "creatinaSerica":false
                         }
  $scope.torax = {"edad":0,
                  "sexo":0,
                  "sas":0,
                  "funcional":0,
                  "disnea":0,
                  "tipoCirugia":0,
                  "comorbilidad":0,
                  "diagnostico": 0,
                  "procedimiento": 0

                  } 
  $scope.calcular = function() {
    var suma = parseFloat($scope.torax.edad) + parseFloat($scope.torax.sexo) + parseFloat($scope.torax.sas) + parseFloat($scope.torax.funcional) + parseFloat($scope.torax.disnea) + parseFloat($scope.torax.tipoCirugia) + parseFloat($scope.torax.comorbilidad) + parseFloat($scope.torax.diagnostico) + parseFloat($scope.torax.procedimiento);
    var logit = -7.3737 + suma;

    var predictedRate = Math.pow(Math.E,logit)/(1+Math.pow(Math.E,logit));

    var predictedRatePorcent = predictedRate * 100;
    var pre = Math.pow(Math.E,-7.3737)/(1+Math.pow(Math.E,-7.3737));

    console.log(pre);

    $scope.lee = 0;

    if ($scope.factoresRiesgo.cxAltoRiesgo==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.eventoIsquemico==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.insuficienciaCardiaca==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.enfermedadCerebroVascular==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.diabetesInsulino==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.creatinaSerica==true) {

      $scope.lee +=1;
    };

    $scope.indiceLee = {"clase":"", "nivelRiesgo":""};

    switch ($scope.lee) {
      case 0:
          $scope.indiceLee.clase = "I";
          $scope.indiceLee.nivelRiesgo =" 0.4% (0.05-1.5%)";
          break;
      case 1:
          $scope.indiceLee.clase = "II";
          $scope.indiceLee.nivelRiesgo =" 0.9% (0.3-2.1%)";
          break;
      case 2:
          $scope.indiceLee.clase = "III";
          $scope.indiceLee.nivelRiesgo =" 6.6% (3.9-10.3%)";
          break;
      case 3:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 4:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 5:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 6:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      }

     var alertPopup = $ionicPopup.alert({
       title: 'Resultado!',
       template: '<b>Indice de Lee</b> clase <b> '+$scope.indiceLee.clase + '</b> con riesgo de evento cardiaco de '+ $scope.indiceLee.nivelRiesgo + '<br>' + '<b>ToracoScore</b> <br> probabilidad de muerte intrahospitalaria '+predictedRatePorcent+'%' ,
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   


  }

})
.controller('GeneralCtrl', function($scope,$ionicPopup) {

  $scope.factoresRiesgo = {"cxAltoRiesgo":false,
                           "eventoIsquemico":false,
                           "insuficienciaCardiaca":false,
                           "enfermedadCerebroVascular":false,
                           "diabetesInsulino":false,
                           "creatinaSerica":false
                         }

  $scope.general = {"edad":1,
                  "sistemaCardiaco":1,
                  "sistemaRespiratorio":1,
                  "pas":1,
                  "pulso":1,
                  "glasgow":1,
                  "urea":1,
                  "sodio": 1,
                  "potasio": 1,
                  "hemoglobina":1,
                  "leucocitos":1,
                  "ecg":1

                  }
  $scope.operativa = {
                      "gravedad":1,
                      "mprocedimiento":1,
                      "perdidaSangre":1,
                      "peritoneal":1,
                      "malignidad":1,
                      "modoCirugia":1,
                     } 

  $scope.calcular = function() {
    
    var scoreFisiologico = parseInt($scope.general.edad)+parseInt($scope.general.sistemaCardiaco)+parseInt($scope.general.sistemaRespiratorio)+parseInt($scope.general.pas)+parseInt($scope.general.pulso)+parseInt($scope.general.glasgow)+parseInt($scope.general.urea)+parseInt($scope.general.sodio)+parseInt($scope.general.potasio)+parseInt($scope.general.hemoglobina)+parseInt($scope.general.leucocitos)+parseInt($scope.general.ecg);

    console.log("scoreFisiologico: "+scoreFisiologico);
    var scoreOperativo = parseInt($scope.operativa.gravedad)+parseInt($scope.operativa.mprocedimiento)+parseInt($scope.operativa.perdidaSangre)+parseInt($scope.operativa.peritoneal)+parseInt($scope.operativa.malignidad)+parseInt($scope.operativa.modoCirugia);
    console.log("scoreOperativo: "+scoreOperativo)

    var x = (0.16*scoreFisiologico)+(0.19*scoreOperativo)-5.91;
    var predictemorbidityRate = (1/(1+Math.pow(Math.E,-x)))*100;

    var y = (0.13*scoreFisiologico)+(0.16*scoreOperativo)-7.04;
    var predicteMortalityRate = (1/(1+Math.pow(Math.E,-y)))*100;

console.log("Morbidity Rate: "+predictemorbidityRate);
console.log("Mortality Rate: "+predicteMortalityRate);
    $scope.lee = 0;

    if ($scope.factoresRiesgo.cxAltoRiesgo==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.eventoIsquemico==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.insuficienciaCardiaca==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.enfermedadCerebroVascular==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.diabetesInsulino==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.creatinaSerica==true) {

      $scope.lee +=1;
    };

    $scope.indiceLee = {"clase":"", "nivelRiesgo":""};

    switch ($scope.lee) {
      case 0:
          $scope.indiceLee.clase = "I";
          $scope.indiceLee.nivelRiesgo =" 0.4% (0.05-1.5%)";
          break;
      case 1:
          $scope.indiceLee.clase = "II";
          $scope.indiceLee.nivelRiesgo =" 0.9% (0.3-2.1%)";
          break;
      case 2:
          $scope.indiceLee.clase = "III";
          $scope.indiceLee.nivelRiesgo =" 6.6% (3.9-10.3%)";
          break;
      case 3:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 4:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 5:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 6:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      }

     var alertPopup = $ionicPopup.alert({
       title: 'Resultado!',
       template: '<b>Indice de Lee</b> clase <b> '+$scope.indiceLee.clase + '</b> con riesgo de evento cardiaco de '+ $scope.indiceLee.nivelRiesgo + '<br>' +'<strong> POSSUM </strong>'+ '<br><b>Tasa de mortalidad predicha es:</b> '+predicteMortalityRate+'%  <br> '+ '<b>Tasa de morbilidad predicha es:</b> '+predictemorbidityRate+'% <br> ' ,
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   


  }







})
.controller('ColorectalCtrl', function($scope,$ionicPopup) {

  $scope.factoresRiesgo = {"cxAltoRiesgo":false,
                           "eventoIsquemico":false,
                           "insuficienciaCardiaca":false,
                           "enfermedadCerebroVascular":false,
                           "diabetesInsulino":false,
                           "creatinaSerica":false
                         }

  $scope.general = {"edad":1,
                  "sistemaCardiaco":1,
                  "pulso":1,
                  "urea":1,
                  "hemoglobina":1,
                  "sistolica":1,
                  

                  }
  $scope.operativa = {
                      "gravedad":1,
                      "peritoneal":1,
                      "malignidad":1,
                      "modoCirugia":1,
                     } 

  $scope.calcular = function() {
    
    var scoreFisiologico = parseInt($scope.general.edad)+parseInt($scope.general.sistemaCardiaco)+parseInt($scope.general.pulso)+parseInt($scope.general.urea)+parseInt($scope.general.hemoglobina)+parseInt($scope.general.sistolica);

    console.log("scoreFisiologico: "+scoreFisiologico);
    var scoreOperativo = parseInt($scope.operativa.gravedad)+parseInt($scope.operativa.peritoneal)+parseInt($scope.operativa.malignidad)+parseInt($scope.operativa.modoCirugia);
    console.log("scoreOperativo: "+scoreOperativo)


    var c = ((0.338*scoreFisiologico)+(0.308*scoreOperativo))-9.167;
    var e = Math.pow(Math.E,-(c));
    var predicteMortalityRate = (100/(1 + e));
  console.log(e);
  console.log("Mortality Rate: "+predicteMortalityRate);
    $scope.lee = 0;

    if ($scope.factoresRiesgo.cxAltoRiesgo==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.eventoIsquemico==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.insuficienciaCardiaca==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.enfermedadCerebroVascular==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.diabetesInsulino==true) {

      $scope.lee +=1;
    };
    if ($scope.factoresRiesgo.creatinaSerica==true) {

      $scope.lee +=1;
    };

    $scope.indiceLee = {"clase":"", "nivelRiesgo":""};

    switch ($scope.lee) {
      case 0:
          $scope.indiceLee.clase = "I";
          $scope.indiceLee.nivelRiesgo =" 0.4% (0.05-1.5%)";
          break;
      case 1:
          $scope.indiceLee.clase = "II";
          $scope.indiceLee.nivelRiesgo =" 0.9% (0.3-2.1%)";
          break;
      case 2:
          $scope.indiceLee.clase = "III";
          $scope.indiceLee.nivelRiesgo =" 6.6% (3.9-10.3%)";
          break;
      case 3:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 4:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 5:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      case 6:
          $scope.indiceLee.clase = "IV";
          $scope.indiceLee.nivelRiesgo =" 11% (5.8-18.4%)";
          break;
      }

     var alertPopup = $ionicPopup.alert({
       title: 'Resultado!',
       template: '<b>Indice de Lee</b> clase <b> '+$scope.indiceLee.clase + '</b> con riesgo de evento cardiaco de '+ $scope.indiceLee.nivelRiesgo + '<br>' +'<strong> POSSUM CR </strong>'+ '<br><b>Tasa de mortalidad predicha es:</b> '+predicteMortalityRate+'%' ,
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   


  }







});

