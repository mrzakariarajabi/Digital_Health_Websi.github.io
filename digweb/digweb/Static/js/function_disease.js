//console.log('JavaScript file loaded');
// diabetes function 
function diabetes_Results(page_number)
{
  //inputDiabetesAge
  //inputPatientGender
  //inputPatientBMI
  //inputPatientWaist
  //inputPatientDrugHistory
  //inputPationtPhysicalActivity
  //inputPationtGlucose
  //inputPationtVegetables
  var referringPage = document.referrer;

  if (referringPage) {
    console.log("The user was referred from: " + referringPage);
  } else {
    console.log("The user was not referred by another page.");
  }
// Age 
    var Age = document.getElementById('inputDiabetesAge'),
      Age_value = Age.value;
    //console.log("Age" + Age_value);
// gender
    var Gender = document.getElementById('inputPatientGender'),
      Gender_value = Gender.value;
    //console.log("Gender" + Gender_value);
// BMI
    var Height = document.getElementById('inputPatientHeight'),
      Height_value = Height.value;
      var Weight = document.getElementById('inputDiabetesWeight'),
      Weight_value = Weight.value;
      BMI_value = Weight_value /(Math.pow((Height_value/100),2));

    //var PatientBMI = document.getElementById('inputPatientBMI'),
      //BMI_value = PatientBMI.value;
    //console.log("BMI = " + BMI_value);
//Waist
    var PatientWaist = document.getElementById('inputPatientWaist'),
    Waist_value = PatientWaist.value;
    //console.log("Waist" + Waist_value);
//DrugHistory
    var DrugHistory = document.getElementById("inputPatientDrugHistory").checked;
    //console.log( DrugHistory);
//PhysicalActivity
    var PhysicalActivity = document.getElementById("inputPationtPhysicalActivity").checked;
    var physicalnot= !PhysicalActivity;
    //console.log( PhysicalActivity);
//Glucose
    var Glucose = document.getElementById("inputPationtGlucose").checked;
    //console.log( Glucose);
//inputPationtVegetables
    var Vegetables = document.getElementById("inputPationtVegetables").checked;
    var Vegetablenot = !Vegetables
    //console.log( !Vegetables);

    //Age
    if (Age_value < 45){
            Age_risk = 0;
            Age_point = 0;
        }
    else if (Age_value >= 45 && Age_value < 54){
            Age_risk = 0.650;
            Age_point = 2;
        }
    else if (Age_value >= 55 && Age_value < 64){
            Age_risk = 0.940;
            Age_point = 3;
        }
    else {
            Age_risk = 0.940;
            Age_point = 3;
        }
    //BMI
    if (BMI_value <=25 ){
            BMI_risk =0
            BMI_point = 0
        }
    else if  (BMI_value > 25 && BMI_value <= 30){
            BMI_risk =  0.015
            BMI_point = 1
        }
    else{
            BMI_risk = 0.938
            BMI_point = 3
        }
    //Gender
    if (Gender_value==0){ //Male
      
        if (Waist_value < 94){
                Waist_risk = 0
                Waist_point = 0
            }
        else if (Waist_value < 102){
                 Waist_risk = 1.021
                 Waist_point = 3
            }
        else{
                 Waist_risk = 1.424
                 Waist_point =4
            }
        }
    else { //female
      
        if (Waist_value < 80){
                Waist_risk = 0
                Waist_point = 0
            }
        else if (Waist_value < 88){
                 Waist_risk = 1.021
                 Waist_point = 3
            }
        else{
                 Waist_risk = 1.424  
                 Waist_point = 4
            }
        }
// 
risk = Age_risk+BMI_risk+Waist_risk;
point = Age_point+ BMI_point+ Waist_point;
Risk_total = -5.658 + risk+ 0.714*DrugHistory+ 2.263*Glucose+ 0.268*physicalnot+ 0.165*Vegetablenot;
point_total = point+ 2*DrugHistory + 5*Glucose + 2*physicalnot+ 1*Vegetablenot;
final_Risk = Math.exp(Risk_total)/ (1+Math.exp(Risk_total));
//console.log( "final_Risk = " + final_Risk);
if (page_number==1){
  document.getElementById("discribe_text").innerHTML = "ریسک 10 ساله شما برابر است با " + (final_Risk*100).toFixed(2)+" درصد";

}
else{
  document.getElementById("discribe_text").innerHTML = "your 10 year Risk equal by " + (final_Risk*100).toFixed(2)+" Percent.";

}
/////////////////////////////////////////////


}
// end of diabetes function

// stroke function
function stroke_Results(page_number)
{
  //inputPatientAge
  //inputPatientGender
  //inputPatientDrugHistory
  //inputPatientSBPHistory
  //inputPatientDiabetes
  //inputPationtSmoke
  //inputPationtCVD
  //inputPationtAF
  //inputPationtLVH
  //inputPationtinteraction
  const year_man = [0.9948, 0.9889, 0.9826, 0.9740, 0.9642, 0.9551, 0.9422, 0.9270, 0.9144, 0.9044];
  const year_women = [0.9977, 0.9920, 0.9864, 0.9802, 0.9741, 0.9665, 0.9584, 0.9509, 0.9448, 0.9353];
  //Age
  var Age = document.getElementById('inputPatientAge'),
    Age_value = Age.value;
    //console.log("Age is " + Age_value);
  //DrugHistory
  var DrugHistory = document.getElementById("inputPatientDrugHistory").checked;
    //console.log( DrugHistory);
  //SBPHistory
  var SBPHistory = document.getElementById('inputPatientSBPHistory'),
    SBPHistory_value = SBPHistory.value;
    //console.log("Age is " + SBPHistory_value);
  //Diabetes
  var Diabetes = document.getElementById("inputPatientDiabetes").checked;
    //console.log( Diabetes);
  //Smoke
  var Smoke = document.getElementById("inputPationtSmoke").checked;
    //console.log( Smoke);
  //CVD
  var PationtCVD = document.getElementById("inputPationtCVD").checked;
    //console.log( PationtCVD);
  //AF
  var PationtAF = document.getElementById("inputPationtAF").checked;
    //console.log( PationtAF);
  //PationtLVH
  var PationtLVH = document.getElementById("inputPationtLVH").checked;
    //console.log( PationtLVH);
  //inputPationtinteraction
  PI_value =false;
  if (DrugHistory){
    if (SBPHistory_value >= 160){
      PI_value = true;
    }
    else{
      PI_value =false;
    }
  }
  //var Pationtinteraction = document.getElementById('inputPationtinteraction'),
    //PI_value = Pationtinteraction.value;
  
    //console.log( PI_value);
//year
var year = document.getElementById('inputyear'),
    year_value = year.value;
    //console.log("The value is " + year_value);

//gender
    var gender = document.getElementById('inputPatientGender'),
        gender_value = gender.value;
    //console.log("The value is " + gender_value);
//////////////
      if (gender_value==0) {
        console.log("income");
        func_men = (0.0505*Age_value)+(0.0140*SBPHistory_value)+(0.3263*DrugHistory)+0.3384*Diabetes+0.5147*Smoke+0.5195*PationtCVD+0.6061*PationtAF+0.8415*PationtLVH;
        exp_men = func_men - 5.6670;
        f_men = Math.exp(exp_men);
        risk_men = 1-Math.pow(year_man[year_value-1], f_men);
        console.log("men = "+risk_men*100);
        if (page_number==1){
          document.getElementById("discribe_text").innerHTML = "ریسک " + year_value + " ساله شما برابر است با " + (risk_men*100).toFixed(2)+" درصد";
        }
        else{
          document.getElementById("discribe_text").innerHTML = "your " + year_value + " year Risk equal by " + (risk_men*100).toFixed(2)+" Percent.";
        }

      }
      else{
        func_women = (0.0657*Age_value)+(0.0197*SBPHistory_value)+(2.5432*DrugHistory)-0.0134*PI_value+0.5444*Diabetes+0.5294*Smoke+0.4326*PationtCVD+1.1497*PationtAF+0.8488*PationtLVH;
        exp_women = func_women - 7.5766;
        f_women = Math.exp(exp_women);
        risk_women = 1-Math.pow(year_women[year_value-1], f_women);
        //console.log("women = "+risk_women*100);
        if (page_number==1){
          document.getElementById("discribe_text").innerHTML = "ریسک " + year_value + " ساله شما برابر است با " + (risk_women*100).toFixed(2)+" درصد";
        }
        else{
          document.getElementById("discribe_text").innerHTML = "your " + year_value + " year Risk equal by " + (risk_women*100).toFixed(2)+" Percent.";
        }

      }
}

// end of stroke function

// CKD function 
function ckd_Results(page_number)
{
  //inputPatientAge
  //inputPatientGender 
  //inputPatientAnemia
  //inputPatientDrugHistory
  //inputPatientHypertension
  //inputPationtHistoryCVD
  //inputPationtHistoryCHF
  //inputPationtPVD
  //inputPationtProteinuria
  //inputPationtDM
  // Age 
  var Age = document.getElementById('inputPatientAge'),
    Age_value = Age.value;
    if (Age_value <=49){
      //console.log("Age Categury 1");
      Age_cat1=1;Age_cat2=0;Age_cat3=0;Age_cat4=0;
    }
    else if (Age_value>=50 && Age_value<=59){
      //console.log("Age Categury 2");
      Age_cat1=0;Age_cat2=1;Age_cat3=0;Age_cat4=0;
    }
    else if (Age_value>=60 && Age_value<=69){
      //console.log("Age Categury 3");
      Age_cat1=0;Age_cat2=0;Age_cat3=1;Age_cat4=0;
    }
    else{
      //console.log("Age Categury 4");
      Age_cat1=0;Age_cat2=0;Age_cat3=0;Age_cat4=1;
    }
    // gender
    var Gender = document.getElementById('inputPatientGender'),
    Gender_value = Gender.value;
    //console.log("Gender" + Gender_value);
    // Anemia
    var Anemia = document.getElementById("inputPatientAnemia").checked;
          //console.log( Anemia);   
    // Drug History
   // var DrugHistory = document.getElementById("inputPatientDrugHistory").checked;
         // console.log( DrugHistory); 
    // Hypertension
    var Hypertension = document.getElementById("inputPatientHypertension").checked;
          //console.log( Hypertension); 
    // HistoryCVD
    var HistoryCVD = document.getElementById("inputPationtHistoryCVD").checked;
          //console.log( HistoryCVD); 
    // HistoryCHF
    var HistoryCHF = document.getElementById("inputPationtHistoryCHF").checked;
          //console.log( HistoryCHF); 
    // PationtPVD
    var PationtPVD = document.getElementById("inputPationtPVD").checked;
          //console.log( PationtPVD); 
    // Proteinuria
    var Proteinuria = document.getElementById("inputPationtProteinuria").checked;
          //console.log( Proteinuria);
    //PationtDM
    var PationtDM = document.getElementById("inputPationtDM").checked;
          //console.log( PationtDM);
    //
  func_res=-5.4 +0*Age_cat1 +1.55*Age_cat2 + 2.31*Age_cat3 + 3.23*Age_cat4 + 0.29*Gender_value + 0.93*Anemia + 0.45*Hypertension + 0.44*PationtDM + 0.59*HistoryCVD + 0.45*HistoryCHF + 0.74*PationtPVD + 0.83*Proteinuria;
    exp_value=Math.exp(-func_res);
    Probability=1/(1+exp_value);
    //console.log( Probability*100);
    if (page_number==1){
      document.getElementById("discribe_text").innerHTML = "ریسک 5 ساله شما برابر است با  " + (Probability*100).toFixed(2)+" درصد";
    }
    else{
      document.getElementById("discribe_text").innerHTML = "your 5 year Risk equal by " + (Probability*100).toFixed(2)+" Percent.";
    }
}

// end of CKD function

// CVD function 
function cvd_Results(page_number)
{
  //inputPatientAge
  //inputPatientGender 
  //inputPatientSBP
  //inputPatientWaist
  //inputPatientHip
  //inputPationtSmoke
  //inputPationtDiabetes
if (page_number==1){
  console.log(page_number);
}
  

  // Age 
  var Age = document.getElementById('inputPatientAge'),
    Age_value = Age.value;
  // gender
  var Gender = document.getElementById('inputPatientGender'),
    Gender_value = Gender.value;
    //console.log("Gender" + Gender_value);
  // SBP
  var PationtSBP = document.getElementById('inputPatientSBP'),
    SBP_value = PationtSBP.value;
  // Waist
  var Waist = document.getElementById('inputPatientWaist'),
    Waist_value = Waist.value;
  // Hip
  var Hip = document.getElementById('inputPatientHip'),
    Hip_value = Hip.value;
  // inputPationtSmoke
  var Smoke = document.getElementById("inputPationtSmoke").checked;
          //console.log( HistoryCVD); 
    // inputPationtDiabetes
  var Diabetes = document.getElementById("inputPationtDiabetes").checked;
          //console.log( HistoryCHF); 
    
    //SBP Value
  if (SBP_value>=120 && SBP_value<=139){
    sbpcat2=1;sbpcat3=0;sbpcat4=0;
    }
  else if (SBP_value>=140 && SBP_value<=159){
    sbpcat2=0;sbpcat3=1;sbpcat4=0;
    }
  else if (SBP_value>=160){
    sbpcat2=0;sbpcat3=0;sbpcat4=1;
    }
  else {
    sbpcat2=0;sbpcat3=0;sbpcat4=0;
    }
    // Gender
    WHR_Value = Waist_value/Hip_value;
      // WHR
    if (Gender_value == 1){
    
         if (WHR_Value>=0.85 && SBP_value<0.90){
            WHR_Value2=1;WHR_Value3=0;WHR_Value4=0;
          }
        else if (WHR_Value>=0.90 && WHR_Value<0.95){
            WHR_Value2=0;WHR_Value3=1;WHR_Value4=0;
          }
        else if (WHR_Value>=0.95){
            WHR_Value2=0;WHR_Value3=0;WHR_Value4=1;
          }
        else {//% i.e., WHR<0.85
            WHR_Value2=0;WHR_Value3=0;WHR_Value4=0;
        }
    }
    else{
        if (WHR_Value>=1 && SBP_value<1.05){
          WHR_Value2=1;WHR_Value3=0;WHR_Value4=0;
        }
        else if (WHR_Value>=1.05 && WHR_Value<1.10){
          WHR_Value2=0;WHR_Value3=1;WHR_Value4=0;
        }
        else if (WHR_Value>=1.10){
          WHR_Value2=0;WHR_Value3=0;WHR_Value4=1;
        }
        else{ //% i.e., WHR<1
           WHR_Value2=0;WHR_Value3=0;WHR_Value4=0;
          }

    }
      func_res=0.03823*(Age_value-50.69)+0.73001*(Diabetes-0.07)+0.47524*(sbpcat2-0.3534)+ 0.79045*(sbpcat3-0.1268)+1.13051*(sbpcat4-0.0730)+(-0.32309)*(Gender_value-0.51)+0.26560*(Smoke-0.22)+ 0.10478*(WHR_Value2-0.1291)+0.17986*(WHR_Value3-0.1414)+0.29440*(WHR_Value4-0.2384);



    exp_value=Math.exp(func_res);
    Probability=1-Math.pow(0.96303975,exp_value);
    //console.log( Probability*100);
    if (page_number==1){
      document.getElementById("discribe_text").innerHTML = "ریسک 10 ساله شما برابر است با  " + (Probability*100).toFixed(2)+" درصد";
    }
    else{
      document.getElementById("discribe_text").innerHTML = "your 10 year Risk equal by " + (Probability*100).toFixed(2)+" Percent.";
    }
}

// end of CVD function


// alzheimer function 
function alzheimer_Results(page_number)
{
  //inputPatientAge
  //inputPatientGender
  //inputPatientWeight
  //inputPatientHeight
  //inputPatientEducation
  //inputPatientSBP
  //inputPatientCholesterol
  //inputPationtPhysicalActivity



// Age 
    var Age = document.getElementById('inputPatientAge'),
      Age_value = Age.value;
    //console.log("Age" + Age_value);
// gender
    var Gender = document.getElementById('inputPatientGender'),
      Gender_value = Gender.value;
    //console.log("Gender" + Gender_value);
// BMI
    var Height = document.getElementById('inputPatientHeight'),
      Height_value = Height.value;
      var Weight = document.getElementById('inputPatientWeight'),
      Weight_value = Weight.value;
      BMI_value = Weight_value /(Math.pow((Height_value/100),2));

    //var PatientBMI = document.getElementById('inputPatientBMI'),
      //BMI_value = PatientBMI.value;
    //console.log("BMI = " + BMI_value);
//Education
    var PatientEducation = document.getElementById('inputPatientEducation'),
    Education_value = PatientEducation.value;
    //console.log("Waist" + Waist_value);

// Sistolic Blood Presure
    var Sbp = document.getElementById('inputPatientSBP'),
    SBP_value = Sbp.value;

// Cholesterol
    var Cholesterol = document.getElementById('inputPatientCholesterol'),
    Cholesterol_value = Cholesterol.value;

//PhysicalActivity
    var PhysicalActivity = document.getElementById("inputPationtPhysicalActivity").checked;
    var Activity= PhysicalActivity;
    console.log( PhysicalActivity);


//Age
    if (Age_value < 47){
          Age_score =0;
        }
    else if (Age_value >= 46 && Age_value < 54){
            Age_score = 3;
        }
    else {
            Age_score = 4;
        }

////////////////////////////////////////Education


    if (Education_value == 1){
      Education_score = 2;
    }
    else if (Education_value ==2){
       Education_score= 3;
    }
    else {
      Education_score =0;
    }

    //BMI
    if (BMI_value >30 ){
        BMI_score =2    
        }

    else{
        BMI_score = 0
        }
    //SBP
    if (SBP_value >=140 ){
      SBP_score =2    
      }

  else{
      SBP_score = 0
      }
    // CHL
    if (Cholesterol_value ==1){
      CHL_score =2    
      }

  else{
      CHL_score = 0
      } 
    //Activity
    if (Activity ){
      Activity_score =0    
      }

  else{
      Activity_score = 1
      }     
// #########################  //
risk_score = (1*Age_score)+ (1*Gender_value)+ (1*Activity_score)+ (1*SBP_score) + (1*CHL_score)+ (1*Education_score)+ (1*BMI_score);
console.log("risk score = ", risk_score);
console.log( CHL_score);

if (risk_score < 6){
  if (page_number==1){
    document.getElementById("discribe_text").innerHTML ="ریسک شما کمتر از میانگین احتمال ابتلا به بیماری آلزایمر است "

  }
  else{
    document.getElementById("discribe_text").innerHTML ="it is below the average probability of developing Alzhiemer Disease"

  }
} 
else if (risk_score < 8){
  if (page_number==1){
    document.getElementById("discribe_text").innerHTML ="ریسک شما کمتر از میانگین احتمال ابتلا به بیماری آلزایمر است "

  }
  else{
    document.getElementById("discribe_text").innerHTML ="it is below the average probability of developing Alzhiemer Disease"

  }
}
else if (risk_score < 10){
  if (page_number==1){
    document.getElementById("discribe_text").innerHTML ="ریسک شما نزدیک به میانگین احتمال ابتلا به بیماری آلزایمر است "

  }
  else{
    document.getElementById("discribe_text").innerHTML ="it is close to the average probability of developing Alzhiemer Disease"

  }
}
else if (risk_score < 12){
  if (page_number==1){
    document.getElementById("discribe_text").innerHTML ="ریسک شما بیشتر از میانگین احتمال ابتلا به بیماری آلزایمر است "

  }
  else{
    document.getElementById("discribe_text").innerHTML ="it is above the average probability of developing Alzhiemer Disease"

  }
}
else if (risk_score < 16){
  if (page_number==1){
    document.getElementById("discribe_text").innerHTML ="ریسک شما بیشتر از میانگین احتمال ابتلا به بیماری آلزایمر است "

  }
  else{
    document.getElementById("discribe_text").innerHTML ="it is above the average probability of developing Alzhiemer Disease"

  }
}
  


/////////////////////////////////////////////


}
// end of diabetes function

/////////////////////// hiv function ///////////////////////

// HIV function 
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    hiv_Results();
  });
});

// HIV function 
function hiv_Results() {
  var unssex= document.getElementById('inputPationtUnsafe').checked ? 1 : 0;
  var hetro = document.getElementById('inputPationtHetero').checked ? 1 : 0;
  var sameg = document.getElementById('inputPationtSameGender').checked ? 1 : 0;
  const data = {
    'Gender': parseInt(document.getElementById('inputPatientGender').value),
    'Prison record': document.getElementById('inputPationtPrison').checked ? 1 : 0,
    'Addiction record': document.getElementById('inputPationtAddiction').checked ? 1 : 0,
    'Martial status': parseInt(document.getElementById('inputPatientMartial').value),
    'Occupation': parseInt(document.getElementById('inputPatientOccupation').value),
    'Drug injection': document.getElementById('inputPationtDrug').checked ? 1 : 0,
    'Sex inexchange for goods': document.getElementById('inputPationtGoods').checked ? 1 : 0,
    'Spouse of HIV person': document.getElementById('inputPationtSpouseHIV').checked ? 1 : 0,
    'Receiving Blood': document.getElementById('inputPationtBlood').checked ? 1 : 0,
    'Spouse of high-risk person': document.getElementById('inputPationtSpouseHR').checked ? 1 : 0,
    'Age category': parseInt(document.getElementById('inputPatientAge').value),
    'Unsafe behaviours': (unssex || hetro || sameg),
  };

  //console.log(unssex || hetro || sameg);

  fetch('/hiv/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    if (result.prediction !== undefined) {
      if (result.prediction ==0){
        document.getElementById('discribe_text').innerText = 'With these characteristics, you don\'t have HIV.';
      }else{
        document.getElementById('discribe_text').innerText = 'With these characteristics, you have HIV.';
      }
      
    } else {
      document.getElementById('discribe_text').innerText = 'Error: Enter your Age then click button';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('discribe_text').innerText = 'An error occurred. Please try again.';
  });
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
