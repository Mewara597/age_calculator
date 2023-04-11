
console.log(ageCalculator('2003/06/19'));

function ageCalculator(dob){
    dob = dob.toString()

    let [birthMonth, birthDate, birthYear] = new Date(dob).toLocaleDateString("en-US").split("/");
 
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    
    
    let curreAgeInYear = year- birthYear
    let curreAgeInMonths = month - birthMonth
    let curreAgeInDays = date - birthDate
    
    
    // calculate year if month is greater than 12
    let MonthInYears = curreAgeInYear *12  
    let ageInMonths = (MonthInYears + curreAgeInMonths)
    let yrs = Math.floor(ageInMonths/12);
    let mnth = ageInMonths%12
    
    // manage days if days are greater than 30 or 31 or 28
    let daysInMonth = new Date(year , month, 0 ).getDate()
    let days = daysInMonth + curreAgeInDays
    
    
    if(days > daysInMonth ){
     let   diffrence = days- daysInMonth;
     days = diffrence
    }
    
    
    return {
        year : yrs,
        month: mnth ,
        days: days
    
    }
    
}