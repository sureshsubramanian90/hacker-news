export const calcDate = (date1,date2) => {
    const diff = Math.floor(date1.getTime() - date2.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff/day);
    const months = Math.floor(days/31);
    const years = Math.floor(months/12);
    const hours = Math.abs(date1 - date2) / 36e5;

    return {
        days,
        months,
        years,
        hours
    }
}