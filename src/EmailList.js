import { IconButton } from '@material-ui/core'
import React from 'react'
import './EmailList.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Checkbox from '@material-ui/core/Checkbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import EmailRow from './EmailRow';
import { db } from './firebase';

import { useCollection } from 'react-firebase-hooks/firestore';



function EmailList() {


    const [data] = useCollection(db.collection("emails"))
    console.log("Retrieveing data from DB",data)

   
    

    // useEffect(() => {
    //     db.collection('emails')
    //         .orderBy('timestamp', 'desc')
    //         .onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),

    //         }))
                
    //     )
    //     );
    // }, []);



    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emaiList__settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    </div>
                    <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
                </div>
                    <div className="emailList__sections">
                    <Section Icon={InboxIcon} title="primary" color="red" selected={true} />
                    <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                    <Section Icon={LocalOfferIcon} title="promotions" color="red" />
            </div>
            <div className="emailList__list">
               


               {data?.docs.map(doc => (
                   <EmailRow id={doc.id} key={doc.id} title={doc.data().to} subject={doc.data().subject} description={doc.data().message} time={doc.data().timestamp} />
               ))}
                
                <EmailRow
                    title="twitch"
                    subject="test"
                    message="this works"
                />
                       <EmailRow
                    title="twitch"
                    subject="test"
                    message="this works"
                />
                       <EmailRow
                    title="twitch"
                    subject="test"
                    message="this works"
                />
               

       
            </div>
        </div>
    )
}

export default EmailList
