import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {

    const { roomID } = useParams();

    let myMeeting = async (element) => {

        // generate Kit Token
        const appID = 2103475427;
        const serverSecret = "bcf083d2e0d835ec3f2f56cc355fcbdc";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Serene");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `http://localhost:3000/room/${roomID}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return (
        <div>
            <h1 ref={myMeeting}></h1>
        </div>
    );
};

export default Room;