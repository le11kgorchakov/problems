function humanReadable(time) {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)

    const format = (number) => {
        let timeToString = number.toString()
       return timeToString.length === 1? timeToString = '0' + timeToString: timeToString
    }
    return (`${format(hours)}:${format(minutes)}:${format(seconds)}`)
  }



    console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
    console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
    console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
    console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
