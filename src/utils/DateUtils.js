exports.convertPageNumberToDate = (pageNumber) => {
    const numElements = pageNumber * 10 // extra 10 elements per page
    let startDate =  new Date()
    startDate.setDate(startDate.getDate() - numElements) // subtract that many from start date

    return startDate.toISOString().split('T')[0]; // convert to YYYY-MM-DD
}