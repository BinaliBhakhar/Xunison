import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on("click", ".btn-danger", function () {
      var issuerMappingId = $(this).data('id');
      $(this).find('#issMapId').html($('<b> Issuer Mapping id: ' + issuerMappingId  + '</b>'))
 });
      
  //   $(document).ready(function(){
  //     $(".update").click(function(){
  //         var id = $(this).data("uid");
  //         var f1 = $("#f1").html();
  //         var e1 = $("#e1").html();
  //         var p1 = $("#p1").html();
  //         var u1 = $("#u1").html();
  //         var c1 = $("#c1").html();
  //         var f2 = $("#f2").html();
  //         var e2 = $("#e2").html();
  //         var p2 = $("#p2").html();
  //         var u2 = $("#u2").html();
  //         var c2 = $("#c2").html();
  //         if(id==1){
  //             $("#fn").val(f1);
  //             $("#em").val(e1);
  //             $("#pn").val(p1);
  //             $("#un").val(u1);
  //             $("#co").val(c1);
  //         }else if(id==2){
  //           $("#fn").val(f2);
  //           $("#em").val(e2);
  //           $("#pn").val(p2);
  //           $("#un").val(u2);
  //           $("#co").val(c2);
  //         }
  //         $("#up").click(function(){
  //             if(id==1){
  //                 var fn = $("#fn").val();
  //                 var em = $("#em").val();
  //                 var pn = $("#pn").val();  
  //                 var un = $("#un").val();
  //                 var co = $("#co").val();    
  //                 $("#f1").html(fn);
  //                 $("#e1").html(em);
  //                 $("#p1").html(pn);
  //                 $("#u1").html(un);
  //                 $("#c1").html(co);
  //             }else if(id==2){
  //               var fn = $("#fn").val();
  //               var em = $("#em").val();
  //               var pn = $("#pn").val();  
  //               var un = $("#un").val();
  //               var co = $("#co").val();    
  //               $("#f2").html(fn);
  //               $("#e2").html(em);
  //               $("#p2").html(pn);
  //               $("#u2").html(un);
  //               $("#c2").html(co);            
  //             }
  //         });
  //     });
  //     $(".delete").click(function(){
  //        var id = $(this).data("uid");
  //        $("#del").click(function(){
  //            if(id==1){
  //                $("#d1").html('');
  //            }else if(id==2){
  //                $("#d2").html('');
  //            }
  //        });
  //     });
  //  });   
  }


}
