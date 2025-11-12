// "use client";
// import Head from 'next/head'
// import { useState } from "react";
// import Intro from "../components/Intro";

// import Screen1 from "../components/Screen1";
// import Screen2 from "../components/Screen2";
// import Screen3 from "../components/Screen3";
// import Screen4 from "../components/Screen4";



export default function Home() {
  const [screen, setScreen] = useState(1);
  
  return (
    
    <>
      
   <Head>
    <title>Something Special🌝 for some 1 spcl</title>
    <meta name="description" content="A Specail Massage for Someone" />
    <meta property="og:image" content="/Preview.png" />
    <meta property="og:url" content="https://somethingspecialbyfm.netlify.app/" />
    <meta property="og:type" content="website" />

  // </Head>
  //     {screen === 1 && <Screen1 onNext={() => setScreen(2)} />}
  //     {screen === 2 && <Screen2 onNext={() => setScreen(3)} />}
  //     {screen === 3 && <Screen3 onFinish={() => setScreen(4)} />}
  //     {screen === 4 && <Screen4 />}
  //     <div className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50">
  // @programmingwithfarzan
  // ©allrightsreservedbyfarzan
</div>

    </>

   
  );
}
