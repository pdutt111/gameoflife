/**
 * Created by pariskshitdutt on 08/03/15.
 */

module.exports.nextGen=function nextGen(input) {
    var output=[];
    for (var i = 0; i < input.length; i++) {
        output[i]=[];
        for (var j = 0; j < input[i].length; j++) {
            output[i][j]=checkNeighbours(i, j, input);
        }
    }
    return output;
}

function checkNeighbours(i,j,input){
    var response;
    var live=0;
    for(var k=-1;k<=1;k++){
        for(var l=-1;l<=1;l++){
            try {
                if(!(k==0&&l==0)) {
                    if (input[i + k][j + l] == "*") {
                        live++;
                    }
                }
            }catch(e){};
        }
    }
    if(live>3||live<2){
        response=".";
    }else if(live==3){
        response="*";
    }else{
        response=input[i][j];
    }
    return response;

}