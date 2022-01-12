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