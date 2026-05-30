import { useState } from "react";
import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  "🏆 Ice Survivor",
  "🏆 Arcade Champion",
  "🏆 Shopping Queen",
  "🏆 Waffle Conqueror",
  "🏆 Memory Collector",
  "🏆 Sunset Dreamer",
  "🏆 Adventure Partner"
];

const QUESTS = [
  {
    chapter: "Chapter 1",

    title: "🌿 The Secret Garden",
  
    riddle:
      "I am a peaceful world inspired by a distant country. Water, bridges and nature live together here. What am I?",
  
    answer: "okayama garden",
  
    hint1: "Japanese inspiration.",
  
    hint2: "One of Pune's prettiest gardens.",
  
    hint3: "Okayama.",
  
    destination: "Pune Okayama Friendship Garden",
  
    mission:
      "Walk together and find your favorite spot.",
  
    envelope:
      "The Adventure Begins",

    message:
      "No destination is better than spending time with you.",

    reward: 100
  },

  {
    chapter: "Chapter 2",

    title: "🎮 Game Master's Arena",

    riddle:
      "I am a battlefield without danger. Cars race, balls fly and scores decide champions. What am I?",

    answer: "timezone",

    hint1: "Games everywhere.",

    hint2: "Inside a mall.",

    hint3: "Arcade paradise.",

    destination: "Timezone",

    mission:
      "Beat your guide in 3 games.",

    envelope:
      "The Competitive Queen",

    message:
      "I secretly enjoy losing to you more than winning.",

    reward: 100
  },

  {
    chapter: "Chapter 3",

    title: "🛍️ Queen's Shopping Spree",

    riddle:
      "People come here with money and leave with bags. Some find fashion, others find food. What am I?",

    answer: "phoenix marketcity",

    hint1: "Huge mall.",

    hint2: "Shopping destination.",

    hint3: "Marketcity.",

    destination: "Phoenix Marketcity",

    mission:
      "Buy something under ₹300 that reminds you of us.",

    envelope:
      "Tiny Things Big Memories",

    message:
      "The best souvenirs are not bought. They are created.",

    reward: 150
  },

  {
    chapter: "Chapter 4",

    title: "🧇 Sweet Victory",

    riddle:
      "I am sweet, warm and covered with chocolate. Many people love me after shopping. What am I?",

    answer: "belgian waffle",

    hint1: "Dessert.",

    hint2: "Your favorite.",

    hint3: "Waffle.",

    destination: "Belgian Waffle",

    mission:
      "Choose your favorite flavor.",

    envelope:
      "Sweet Victory",
    message:
      "Some people love waffles. I love watching you enjoy them.",

    reward: 100
  },

  {
    chapter: "Chapter 5",

    title: "📸 Memory Collector",

    riddle:
      "I freeze time without stopping it. I turn moments into memories. What am I?",

    answer: "camera",

    hint1: "Used on phones.",

    hint2: "Captures memories.",

    hint3: "Photos.",

    destination: "Photo Challenge",

    mission:
      "Take one happy, one candid and one goofy photo.",

    envelope:
      "Captured Moments",

    message:
      "Moments fade. Memories don't.",

    reward: 100
  },

  {
    chapter: "Chapter 6",

    title: "❄️ The Frozen Kingdom",
  
    riddle:
      "I am winter trapped inside a city of heat. Snow falls every day and jackets become armor. What am I?",
  
    answer: "snow world",
  
    hint1: "You may need a jacket.",
  
    hint2: "Inside a mall.",
  
    hint3: "Snow falls here every day.",
  
    destination: "SNOW WORLD",
  
    mission:
      "Take the final birthday photo together.",
  
    envelope:
      "Adventure Complete",
  
    reward: 250
  },

  {
    chapter: "Chapter 7",

    title: "❤️ Final Boss",

    riddle:
      "I have been waiting all day. Every quest leads to me. What am I?",

    answer: "final surprise",

    hint1: "Last chapter.",

    hint2: "Special gift.",

    hint3: "Birthday surprise.",

    destination: "Final Surprise",

    mission:
      "Open the final envelope.",

    envelope:
      "Adventure Complete",

    message:
      "Thank you for being my favorite adventure.",

    reward: 250
  }
];

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const [questIndex, setQuestIndex] = useState(0);

  const [xp, setXp] = useState(0);

  const [answer, setAnswer] = useState("");

  const [attempts, setAttempts] = useState(10);

  const [showHint1, setShowHint1] = useState(false);

  const [showHint2, setShowHint2] = useState(false);

  const [showHint3, setShowHint3] = useState(false);

  const [achievement, setAchievement] = useState("");

  const [earnedXP, setEarnedXP] = useState(0);

  const currentQuest = QUESTS[questIndex];

  return (
    <div className="screen">

      {screen === "welcome" && (
        <div className="card">
          <div className="crown">👑</div>

          <h1 className="title">
            Billusaurous
          </h1>
          <p
          style={{
          opacity:0.8,
          marginTop:15
          }}
          >
          No two people
          will ever experience
          this exact adventure.
          </p>

          <p className="subtitle">
            A Special Adventure
            Created Only For You ❤️
          </p>

          <button
            className="btn"
            onClick={() => setScreen("loading")}
          >
            Begin Adventure
          </button>
        </div>
      )}

      {screen === "loading" && (
        <div className="card">
          <h1>✨ Initializing Quest</h1>

          <div className="rules">
            <p>Loading Snow Kingdom...</p>
            <p>Preparing Waffles...</p>
            <p>Unlocking Adventures...</p>
          </div>

          <button
            className="btn"
            onClick={() => setScreen("rules")}
          >
            Continue
          </button>
        </div>
      )}

      {screen === "rules" && (
        <div className="card">

          <h1>📜 Rules</h1>

          <div className="rules">
            <p>❌ No asking questions</p>
            <p>❌ No checking maps</p>
            <p>❌ No guessing locations</p>
            <p>✅ Trust your guide</p>
          </div>

          <button
            className="btn"
            onClick={() => setScreen("profile")}
          >
            Accept Quest
          </button>

        </div>
      )}

      {screen === "profile" && (
        <div className="card">

          <h1>👑 Player Profile</h1>

          <div className="profile">
            <div>Billusaurous</div>
            <div>Birthday Queen</div>
            <div>Level 1</div>
            <div>XP: {xp}</div>
          </div>

          <button
            className="btn"
            onClick={() => setScreen("hub")}
          >
            Enter Quest Hub
          </button>

        </div>
      )}

      {screen === "hub" && (
        <div className="card">

          <h1>
          👑 Billusaurous
          </h1>

          <p>
          Level {Math.floor(xp/200)+1}
          </p>

          <p>
          XP: {xp}/1000
          </p>

          <div className="xp-bar">
            <div
              className="xp-fill"
              style={{
                width: `${Math.min((xp / 1000) * 100,100)}%`
              }}
            />
          </div>

          <div className="quest-list">

            {QUESTS.map((q,index) => (

              <div key={index}>

                {index < questIndex
                  ? "✅ Completed"
                  : index === questIndex
                  ? "✨ Current Chapter"
                  : "🔒 Unknown Chapter"}

              </div>

            ))}

          </div>

          <button
            className="btn"
            onClick={() => setScreen("wheel")}
          >
            🎡 Spin The Wheel
          </button>

        </div>
      )}

      {screen === "wheel" && (

  <div className="card">

    <h1>
      🎡 Wheel Of Destiny
    </h1>

    <motion.div
      animate={{
        rotate: 360
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "linear"
      }}
      className="wheel"
    >
      🎡
    </motion.div>

    <p
      style={{
        marginTop:20,
        opacity:0.8
      }}
    >
      The next chapter awaits...
    </p>

    <button
      className="btn"
      style={{marginTop:25}}
      onClick={() => {

        setScreen("spinning");

        setTimeout(() => {

          setAnswer("");

          setAttempts(10);

          setShowHint1(false);

          setShowHint2(false);

          setShowHint3(false);

          setScreen("quest");

        },3000);

      }}
    >
      SPIN THE WHEEL
    </button>

  </div>

)}

{screen === "spinning" && (

<div className="card">

  <motion.h1
    animate={{
      scale:[1,1.1,1]
    }}
    transition={{
      repeat:Infinity,
      duration:1
    }}
  >
    ✨ Selecting Quest ✨
  </motion.h1>

  <div
    style={{
      fontSize:"90px",
      marginTop:"30px"
    }}
  >
    🎡
  </div>

  <p style={{marginTop:20}}>
    Revealing your destiny...
  </p>

</div>

)}
      
      {screen === "quest" && (

        <div className="card">

          <h2>
            {currentQuest.chapter}
          </h2>

          <h1>
            {currentQuest.title}
          </h1>

          <motion.p
          initial={{
            opacity:0,
            y:20
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1
          }}
          >
          {currentQuest.riddle}
          </motion.p>

          <p
            style={{
              marginTop:20,
              color:"gold"
            }}
          >
            Attempts Remaining:
            {" "}
            {attempts}
          </p>

          {showHint1 && (
            <p style={{marginTop:10}}>
              💡 {currentQuest.hint1}
            </p>
          )}

          {showHint2 && (
            <p style={{marginTop:10}}>
              💡 {currentQuest.hint2}
            </p>
          )}

          {showHint3 && (
            <p style={{marginTop:10}}>
              💡 {currentQuest.hint3}
            </p>
          )}

          <input
            value={answer}
            onChange={(e)=>
              setAnswer(e.target.value)
            }
            placeholder="Enter your answer..."
            style={{
              width:"100%",
              marginTop:"20px",
              padding:"12px",
              borderRadius:"10px",
              border:"none"
            }}
          />

          <button
            className="btn"
            style={{marginTop:20}}
            onClick={() => {

              const normalize = (text) =>
                text
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "");
              
              const userAnswer =
                normalize(answer);
              
              const correctAnswer =
                normalize(currentQuest.answer);

              if (
                userAnswer === correctAnswer
              ) {

                setScreen(
                  "destination"
                );

                return;
              }

              const remaining =
                attempts - 1;

              setAttempts(
                remaining
              );

              if (
                remaining <= 7
              ) {
                setShowHint1(true);
              }

              if (
                remaining <= 4
              ) {
                setShowHint2(true);
              }

              if (
                remaining <= 2
              ) {
                setShowHint3(true);
              }

              if (
                remaining <= 0
              ) {

                setScreen(
                  "destination"
                );

              }

            }}
          >
            Submit Answer
          </button>

        </div>

      )}

      {screen === "destination" && (
        <div className="card">

            <motion.h1
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{
              duration:0.7
            }}
            >
            🎉 LOCATION UNLOCKED 🎉
            </motion.h1>

          <h2
            style={{
              color:"gold",
              marginTop:"20px"
            }}
          >
            {currentQuest.destination}
          </h2>

          <p
            style={{
              marginTop:"20px"
            }}
          >
            Mission:
          </p>

          <p>
            {currentQuest.mission}
          </p>

          <p
            style={{
              marginTop:"20px"
            }}
          >
            Envelope:
          </p>

          <p>
            ✉️ {currentQuest.envelope}
          </p>

          <p>
            Reward: +{currentQuest.reward} XP
          </p>

          <button
            className="btn"
            onClick={() => {

              setXp(
                prev =>
                prev + currentQuest.reward
              );
            
              if (
                questIndex ===
                QUESTS.length - 1
              ) {
            
                setScreen("final");
            
              } else {
            
                setQuestIndex(
                  prev => prev + 1
                );
            
                setScreen("hub");
            
              }
            
            }}
          >
            Mission Complete
          </button>

        </div>
      )}
      
      {screen === "achievement" && (

        <div className="card">

          <motion.div
            initial={{ scale:0 }}
            animate={{ scale:1 }}
            transition={{ duration:0.6 }}
          >

            <h1>
              🎉 Achievement Unlocked
            </h1>

            <h2
              style={{
                marginTop:20,
                color:"gold"
              }}
            >
              {achievement}
            </h2>

            <p
              style={{
                marginTop:20
              }}
            >
              +{earnedXP} XP
            </p>

            <button
              className="btn"
              style={{marginTop:25}}
              onClick={() => {
                setScreen("envelope");
              }}
            >
              Continue
            </button>

          </motion.div>

        </div>

        )}

      {screen === "envelope" && (

        <div className="card">

          <h1>
            ✉️ Envelope Unlocked
          </h1>

          <h2
            style={{
              color:"gold",
              marginTop:20
            }}
          >
            {currentQuest.envelope}
          </h2>

          <p
            style={{
              marginTop:25,
              lineHeight:1.8
            }}
          >
            {currentQuest.message}
          </p>

          <button
            className="btn"
            style={{marginTop:25}}
            onClick={() => {

              setAchievement(
                ACHIEVEMENTS[questIndex]
              );
            
              setEarnedXP(
                currentQuest.reward
              );
            
              setScreen(
                "achievement"
              );
            
            }}
          >
            Continue Adventure
          </button>

        </div>

        )}

      {screen === "final" && (
        <div className="card">

          <h1>
          🏆 Adventure Complete

            Total XP: {xp}

            Final Rank:

            ❤️ Favorite Human

            Thank you for playing,
            Billusaurous.
          </h1>

          <p>
            Official Adventure Partner
            Unlocked 👑
          </p>

        </div>
      )}

    </div>
  );
}