function getDateDiff(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.ceil(diffDays / 7);
    const diffSeconds = Math.ceil(diffTime / 1000);
  
    return {
      days: diffDays,
      weeks: diffWeeks,
      seconds: diffSeconds
    };
  }
  
  const date1 = new Date('2023-04-01T00:00:00');
  const date2 = new Date('2023-05-01T12:30:00');
  
  const diff = getDateDiff(date1, date2);
  console.log(`Різниця між датами в днях: ${diff.days}`);
  console.log(`Різниця між датами в тижнях: ${diff.weeks}`);
  console.log(`Різниця між датами в секундах: ${diff.seconds}`);