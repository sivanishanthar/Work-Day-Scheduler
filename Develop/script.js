
$(function () {
  
  var saveBtn = $('.saveBtn');
  //Add click event to save button
  saveBtn.on('click', function () {
    var value = $(this)
      .siblings('.description')
      .val();
    console.log(value)
    var time = $(this)
      .parent()
      .attr('id');
    console.log(time)
    // save in localStorage
    localStorage.setItem(time, value);
  })

  //Render saved items
  $('#9 .description').val(localStorage.getItem('9'));

  $('#10 .description').val(localStorage.getItem('10'));

  $('#11 .description').val(localStorage.getItem('11'));

  $('#12 .description').val(localStorage.getItem('12'));

  $('#13 .description').val(localStorage.getItem('13'));

  $('#14 .description').val(localStorage.getItem('14'));

  $('#15 .description').val(localStorage.getItem('15'));

  $('#16 .description').val(localStorage.getItem('16'));

  $('#17 .description').val(localStorage.getItem('17'));

  //Current hour in 24-hour format
  var currentHour = dayjs().format('H');
  console.log(currentHour)

  $('.time-block').each(function (index, el) {
    console.log(el.id)
    var timeBlockEl = $(el);
    var blockHour = parseInt(el.id); // Convert el.id to a number

    //Change colour of time block depending on time of day
    if (currentHour < blockHour) { 
      timeBlockEl.addClass('future');
    } else if (currentHour > blockHour) { 
      timeBlockEl.addClass('past');
    } else if (currentHour == blockHour) {
      timeBlockEl.addClass('present');
    }
  })

  //Display current date
  var currentDay = dayjs().format('dddd, MMMM Do')
  $('#currentDay').text(currentDay);
});
