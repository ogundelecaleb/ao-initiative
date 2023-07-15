import React, { useEffect, useState } from "react";
// import CountdownTimer from "./component/CountdownTimer"
import "./App.css";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
  const navigate = useNavigate();
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    if (
      days === 0 &&
      hours === 0 &&
      minutes === 0 &&
      seconds === 0
    ) {
      navigate("/countdown");
    }// eslint-disable-next-line
  },[days,hours,minutes,seconds]);

  //   const THREE_DAYS_IN_MS = 17 * 24 * 60 * 60 * 1000;
  //   const NOW_IN_MS = new Date().getTime();

  //   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  // Set the date we're counting down to "Jul 17, 2023 15:37:25"
  var countDownDate = new Date("Jul 14, 2023 9:58:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDays(days);
    // Output the result in an element with id="demo"

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      navigate("/countdown");
    }
  }, 1000);

  return (
    <div className="bg-[#990019] h-screen flex flex-col justify-center items-center">
      <img
        src="/celebrate.png"
        alt="celebrate"
        className="lg:h-[180px] h-[80px]"
      />
      <h1 className="md:text-xl text-center text-lg font-extrabold text-white mb-4">
        OA Initiative Website Will Be Launched In
      </h1>
      {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}

      <div className="show-counter flex text-[18px] md:text-[28px] font-extrabold text-white">
        <div className="flex flex-col gap-3 countdown ">
          <h2> {days}</h2> <p>Days</p>
        </div>
        <p className="text-white">:</p>
        <div className="flex flex-col countdown gap-3 ">
          <h2> {hours}</h2> <p>Hours</p>
        </div>
        <p className="text-white">:</p>
        <div className="flex flex-col countdown gap-3 ">
          <h2> {minutes}</h2> <p>Minutes</p>
        </div>{" "}
        <p className="text-white">:</p>
        <div className="flex flex-col countdown gap-3 ">
          <h2> {seconds}</h2> <p>Seconds</p>
        </div>
      </div>

      {/* <p>
        {days} + "d " + {hours} + "h " + {minutes} + "m " + {seconds} + "s "
      </p> */}
      <div className="p-5 bg-slate-50 rounded-full mt-6">
        <img
          src="/oa-logo.png"
          alt="oa logo"
          className="lg:h-[45px] h-[38px]"
        />
      </div>
    </div>
  );
};

export default Countdown;

// import React, { useState, useRef, useEffect } from 'react'

// const Countdown = () => {
// 	// We need ref in this, because we are dealing
// 	// with JS setInterval to keep track of it and
// 	// stop it when needed
// 	const Ref = useRef(null);

// 	// The state for our timer
// 	const [timer, setTimer] = useState('00:00:00');

// 	const getTimeRemaining = (e) => {
// 		const total = Date.parse(e) - Date.parse(new Date());
// 		const seconds = Math.floor((total / 1000) % 60);
// 		const minutes = Math.floor((total / 1000 / 60) % 60);
// 		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
// 		return {
// 			total, hours, minutes, seconds
// 		};
// 	}

// 	const startTimer = (e) => {
// 		let { total, hours, minutes, seconds }
// 					= getTimeRemaining(e);
// 		if (total >= 0) {

// 			// update the timer
// 			// check if less than 10 then we need to
// 			// add '0' at the beginning of the variable
// 			setTimer(
// 				(hours > 9 ? hours : '0' + hours) + ':' +
// 				(minutes > 9 ? minutes : '0' + minutes) + ':'
// 				+ (seconds > 9 ? seconds : '0' + seconds)
// 			)
// 		}
// 	}

// 	const clearTimer = (e) => {

// 		// If you adjust it you should also need to
// 		// adjust the Endtime formula we are about
// 		// to code next
// 		setTimer('72:0:00');

// 		// If you try to remove this line the
// 		// updating of timer Variable will be
// 		// after 1000ms or 1sec
// 		if (Ref.current) clearInterval(Ref.current);
// 		const id = setInterval(() => {
// 			startTimer(e);
// 		}, 1000)
// 		Ref.current = id;
// 	}

// 	const getDeadTime = () => {
// 		let deadline = new Date();

// 		// This is where you need to adjust if
// 		// you entend to add more time
// 		deadline.setHours(deadline.getHours() + 72);
// 		return deadline;
// 	}

// 	// We can use useEffect so that when the component
// 	// mount the timer will start as soon as possible

// 	// We put empty array to act as componentDid
// 	// mount only
// 	useEffect(() => {
// 		clearTimer(getDeadTime());
// 	}, []);

// 	// Another way to call the clearTimer() to start
// 	// the countdown is via action event from the
// 	// button first we create function to be called
// 	// by the button
// 	const onClickReset = () => {
// 		clearTimer(getDeadTime());
// 	}

// 	return (
// 		<div className="App">
// 			<h2>{timer}</h2>
// 			<button onClick={onClickReset}>Reset</button>
// 		</div>
// 	)
// }

// export default Countdown;
