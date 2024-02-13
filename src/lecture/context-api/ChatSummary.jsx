import { func } from 'prop-types';
import { memo, useContext } from 'react';
import { ChatContext } from '@/contexts/Chat';

function ChatSummary() {
  const { updateUsers: onUpdate } = useContext(ChatContext);

  return (
    <div className="flex flex-col gap-5 bg-slate-200 p-5">
      <h3>ChatSummary</h3>
      <button
        type="button"
        className="p-2 border border-slate-400 text-slate-700 rounded-md text-sm"
        onClick={onUpdate}
      >
        사용자 정보 변경
      </button>
    </div>
  );
}

ChatSummary.propTypes = {
  onUpdate: func,
};

export default memo(ChatSummary);
