exports.convertPageNumberToDate = (pageNumber, elementsPerPage) => {
    const endOffset = (pageNumber - 1) * elementsPerPage;
    const startOffset = pageNumber * elementsPerPage;

    let startDate =  new Date();
    startDate.setDate(startDate.getDate() - startOffset); // subtract that many from start date
    startDate = startDate.toISOString().split('T')[0]; // convert to YYYY-MM-DD

    let endDate = new Date();
    if (endOffset > 0) endDate.setDate(endDate.getDate() - endOffset - 1);
    endDate = endDate.toISOString().split('T')[0];

    return [startDate, endDate]
}

exports.convertToStringDate = (date) => {
    const dates = date.split('-')
    console.log(dates)
    const year = parseInt(dates[0])
    const month = parseInt(dates[1])
    const day = parseInt(dates[2])
    
    return `${monthIndex[month]} ${day}, ${year}`
}

const monthIndex = {
    1 : 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
}