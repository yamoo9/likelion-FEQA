import { func } from 'prop-types';
import { memo } from 'react';

function ChatSummary({ onUpdate }) {
  return (
    <div>
      <h3>ChatSummary</h3>
      <button
        type="button"
        className="p-2 border-2 border-slate-700 rounded-md"
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
