import data from './data.json';
export const getSchoolById = (id,props) => {
    const foundSchool = data.find(school => school.id ===Number(id));
    return foundSchool;
}
export const raitingSchool=(school)=>{
    if(school){
    const raitingTop=Number(school.raitingtop);
    const raitingBad=Number(school.raitingbad);
    const raitingMedium=Number(school.raitingmedium);
    const allRaiting=[raitingTop*5,raitingBad,raitingMedium*3.5];
    let sumRaiting=0
    for(let i=0;i<allRaiting.length;i++){
      sumRaiting+=allRaiting[i];
    }
    const averageRaiting=(sumRaiting/(raitingTop+raitingMedium+raitingBad)).toFixed(2);
    return averageRaiting;
  }else{
    const averageRaiting=0
    return averageRaiting;
  }
  }