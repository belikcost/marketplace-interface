import { useEffect, useState } from "react";
import { getTime } from "date-fns";
import { connect } from "react-redux";

import { chatConnect, getMessagesHistoryRequest } from "../../redux/actions";

import Messages from "../../components/Profile/Messages";


const MessagesContainer = ({locale, user, messagesHistory, onGetMessagesHistoryRequest, chatConnect, onChatConnect}) => {
    const [customerMessages, setCustomerMessages] = useState([]);
    const [supplierMessages, setSupplierMessages] = useState([]);

    useEffect(() => {
        onGetMessagesHistoryRequest(user.id);
    }, [onGetMessagesHistoryRequest, user.id]);

    useEffect(() => {
        onChatConnect();
    }, [onChatConnect]);

    useEffect(() => {
        if (chatConnect) {
            console.log(chatConnect);
            chatConnect.onmessage = ({data, timeStamp}) => {
                setCustomerMessages([...customerMessages, {data, timeStamp}]);
            };
        }
    }, [chatConnect, customerMessages]);

    const handleSend = (text) => {
        chatConnect.send(text);
        setSupplierMessages([...supplierMessages, {data: text, timeStamp: getTime(new Date())}]);
    }

    const allSortMessages = supplierMessages.concat(customerMessages).sort((a, b) => a.timeStamp - b.timeStamp);

    return (
        <Messages
            locale={locale}
            messagesHistory={messagesHistory}
            customerMessages={customerMessages}
            messages={allSortMessages}
            handleSend={handleSend}
        />
    )
}

const mapStateToProps = (state) => ({
    locale: state.locale,
    user: state.user,
    messagesHistory: state.messagesHistory,
    chatConnect: state.chatConnect
});

const mapDispatchToProps = (dispatch) => ({
    onGetMessagesHistoryRequest: (id) => dispatch(getMessagesHistoryRequest(id)),
    onChatConnect: () => dispatch(chatConnect())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);