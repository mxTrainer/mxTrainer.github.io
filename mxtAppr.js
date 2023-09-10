let finished = true;

function appraiseSort(){
  for(let i = 0; i < finalArray[0].length; i++){
    finalArray[0][i].appr = trainValue(finalArray[0][i]);
    sortTrain(finalArray[0][i]);
  }
}

function trainValue(train){ //also searches for double blank (db)
  let total = 0;
  for(let count = 0; count < train.length; count++){
    let db = total;
    total += train[count][0] + train[count][1];
    if(db == total){total += 50}
  }
  return total;
}

function mxtSort(type){
  finalArray[0].sort(function (a,b) {
    if(type == 0){//sort by length sub appr
      if(a.length != b.length){return b.length - a.length}
      else{return b.appr - a.appr}
    }else if(type == 1){//sort by appr sub length
      if(a.appr != b.appr){return b.appr - a.appr}
      else{return b.length - a.length}
    }

});
}

function userTrain(u_train){
  let fa_len = finalArray[0].length;
  let user_len = u_train.length;
  u_train.appr = trainValue(u_train);

  for(let i = 0; i < fa_len; i++){
    if(finalArray[0][i].length == user_len && finalArray[0][i].appr == u_train.appr){
      if(isTrainSame(finalArray[0][i], u_train)){displayTrain(finalArray[0][i]); displayed = i; index.textContent = "#" + (i + 1) + "/" + fa_len; return;}
    }
  }
  alert("Error: Train not found.")
}

function isDominoSame(d1, d2){
  if( d1[0] == d2[0] && d1[1] == d2[1]){return true;}
  else{return false;}
}
function isTrainSame(train1, train2){ //assumes trains are of the same length. Verify before calling.
  for(let i = 0; i < train1.length; i++){
    if( !isDominoSame(train1[i], train2[i]) ){return false}
  }
  return true;
}

let halfWidth = window.innerWidth/2
c.onclick = function(e){
    if(e.pageX <= halfWidth && displayed != 0){finished = false; displayTrain(finalArray[0][--displayed]); index.textContent = "#" + (displayed + 1) + "/" + numTrains; finished = true;}else if(displayed != finalArray[0].length - 1){finished = false; displayTrain(finalArray[0][++displayed]); index.textContent = "#" + (displayed + 1) + "/" + numTrains; finished = true;}
}

let displayed = 0;
let index = document.getElementById("displayed");
window.addEventListener("keydown",function(e){
    if(finished == true){
      if(e.keyCode == 37 && displayed != 0){finished = false; displayTrain(finalArray[0][--displayed]); index.textContent = "#" + (displayed + 1) + "/" + numTrains; finished = true;}
      else if(e.keyCode == 39 && displayed != finalArray[0].length - 1){finished = false; displayTrain(finalArray[0][++displayed]); index.textContent = "#" + (displayed + 1) + "/" + numTrains; finished = true;}
    }
})
