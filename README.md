My StopWatch project is deployed on Github, take a look: https://varmavemula.github.io/StopWatch/
# What is this project about?
In this project, a stopwatch timer page is created using HTML, CSS and javascript.
  ## StopWatch
  A stopwatch is a type of time counter from 1 second with start, stop and reset buttons.\
  --> when we click start button, the stopwatch will start counting the time.\
  --> when we click on stop button, the stop watch will stop counting at the instance and it resumes from the point where it         is stopped when we click start again.\
  --> when we click on reset button, the timer will start counting from beginning.
# What is the procedure followed?
  --> First, an HTML file is created for structure of the stopwatch.\
  --> CSS is created and used to highlight the page\
  --> javascript is used to give the operative controls for the buttons and the timer.\
  --> The above three files(HTML, CSS and js) are combined using link tag and script tag in HTML file.
# flow of the functions in javascript?
  ## startCount
    -> StartCount function is added as an event listener for the start button on the stopwatch page.
    -> When onClick, the startCount function will be started only when the flag variable is set to 0.
    -> Initially, the flag value is set to zero and the value is altered according to the function in which flow is going.
  ## stopCount
    -> StopCount function is added as an event listener for the stop button on the stopwatch page.
    -> This function used to pause the stopwatch at the incident.
    -> After clicking the start button, the flag value will be changed to 1 from 0.
  ## resetTimer
    -> resetTimer function is added as an event listener for the reset button on the stopwatch page.
    -> this is used to reset the timer to 0 and pause the stopwatch.
    -> At the end, the flag value will be set to 0 again. so that, we can start the timer again without reloading the page.
