import { useState } from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { format, isToday, parse } from "date-fns";

import './index.scss';


const Messages = ({locale, messagesHistory, messages, customerMessages, handleSend}) => {
    const {t} = useTranslation();
    const match = useRouteMatch();

    const [text, setText] = useState('');

    const buildTime = (ms, defaultFormat) => {
        const date = parse(Math.floor(ms), 'T', new Date());
        let formatString = defaultFormat;
        if (isToday(date)) {
            formatString = 'HH:mm';
        }
        return format(date, formatString, {locale: locale});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSend(text);
        setText('');
    };

    return (
        <div className="chat-messages_container">
            <h1>{t('messages')}</h1>
            <div className="chat-messages">
                <div className="chat-messages__history">
                    {messagesHistory && messagesHistory.length !== 0 ? messagesHistory.map(chat => (
                        <NavLink to={`${match.path}/${chat.id}`} className="chat-message" key={chat.id}>
                            <img src={chat.avatar} alt={t('avatar')}/>
                            <div className="chat-message__body">
                                <p>{chat.name}</p>
                                <span>{chat.last_text}</span>
                            </div>
                            <div className="chat-message__date-area">
                                <p>{buildTime(chat.last_date, 'MM/dd/yy')}</p>
                                <span>{chat.new_count}</span>
                            </div>
                        </NavLink>
                    )) : (
                        <p>{t('noMessagesHistory')}</p>
                    )}
                </div>
                <div className="chat-messages__messages">
                    <Switch>
                        <Route path="/profile/messages/:chatId">
                            <div className="chat-messages__message-container">
                                {messages.length !== 0 ? messages.map((message, i) => (
                                    <div key={i} className={`chat-messages__message ${customerMessages.indexOf(message) !== -1 ? 'customer' : ''}`}>
                                        <p>{message.data}</p>
                                        <span>
                                            {buildTime(message.timeStamp, 'MM/dd/yy, HH:mm')}
                                        </span>
                                    </div>
                                )) : (
                                    <p>{t('readyDialog')}</p>
                                )}
                            </div>
                            <form onSubmit={onSubmit}>
                         <textarea
                             value={text}
                             onChange={(e) => setText(e.target.value)}
                             placeholder={t('enterMessageText')}
                             required
                         />
                                <button>
                                    {t('send')}
                                </button>
                            </form>
                        </Route>
                        <Route path="/profile/messages">
                            {t('choseChat')}
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Messages;