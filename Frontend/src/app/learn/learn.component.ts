import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  // id: number;
  // fullName: string;
  // companyName: string;
  // email: string;
  // phoneNo: string;
  // userName: string;
  // appAdded:string;
  // createdOn:Date;
  constructor() { }
  // employees: [
  //   {
  //     id: "",
  //     fullName:"",
  //     companyName:"",
  //     email:"",
  //     phoneNo:""
  //     userName:"",
  //     appAdded:"",
  //     createdOn:""
  //   },    
  // ];
  ngOnInit() {
    const $tableID = $('#table');
    const $BTN = $('#export-btn');
    const $EXPORT = $('#export');
   
    const newTr = `
   <tr class="hide">
     <td class="pt-3-half" contenteditable="true">Example</td>
     <td class="pt-3-half" contenteditable="true">Example</td>
     <td class="pt-3-half" contenteditable="true">Example</td>
     <td class="pt-3-half" contenteditable="true">Example</td>
     <td class="pt-3-half" contenteditable="true">Example</td>
     <td class="pt-3-half">
       <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
       <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
     </td>
     <td>
       <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
     </td>
   </tr>`;
   
    $('.table-add').on('click', 'i', () => {
   
      const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');
   
      if ($tableID.find('tbody tr').length === 0) {
   
        $('tbody').append(newTr);
      }
   
      $tableID.find('table').append($clone);
    });
   
    $tableID.on('click', '.table-remove', function () {
   
      $(this).parents('tr').detach();
    });
   
    $tableID.on('click', '.table-up', function () {
   
      const $row = $(this).parents('tr');
   
      if ($row.index() === 0) {
        return;
      }
   
      $row.prev().before($row.get(0));
    });
   
    $tableID.on('click', '.table-down', function () {
   
      const $row = $(this).parents('tr');
      $row.next().after($row.get(0));
    });
   
    // A few jQuery helpers for exporting only
    // jQuery.fn.pop = [].pop;
    // jQuery.fn.shift = [].shift;
   
    $BTN.on('click', () => {
   
      const $rows = $tableID.find('tr:not(:hidden)');
      const headers = [];
      const data = [];
   
      // Get the headers (add special header logic here)
      $($rows.shift()).find('th:not(:empty)').each(function () {
   
        headers.push($(this).text().toLowerCase());
      });
   
      // Turn all existing rows into a loopable array
      $rows.each(function () {
        const $td = $(this).find('td');
        const h = {};
   
        // Use the headers from earlier to name our hash keys
        headers.forEach((header, i) => {
   
          h[header] = $td.eq(i).text();
        });
   
        data.push(h);
      });
   
      // Output the result
      $EXPORT.text(JSON.stringify(data));
    });
  //   addRow() {
  //   //prompt("Checking the control!");
  //   this.employees.push({
  //     id: this.id,
  //     fullName: this.fullName,
  //     companyName: this.companyName,
  //     email: this.email,
  //     phoneNo: this.phoneNo,
  //     userName:this.userName,
  //     appAdded:this.appAdded,
  //     createdOn:this.createdOn
  //   });
  // }

  // deleteEmployee(index) {

  //   this.employees.splice(index, 1);
  // }
//     $(document).on("click", ".btn-danger", function () {
//       var issuerMappingId = $(this).data('id');
//       $(this).find('#issMapId').html($('<b> Issuer Mapping id: ' + issuerMappingId  + '</b>'))
//  });
      
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
