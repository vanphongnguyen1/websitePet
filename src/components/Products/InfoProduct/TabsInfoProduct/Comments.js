import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import ListComments from './ListComments'

const Comments = ({ data, dataUser, setIsReply, isReply })=> {

  const [likes, setLikes] =useState(data.like);
  const [dislikes, setDislikes] =useState(data.desLike);
  const [action, setAction] =useState(null);

  const like= () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  }

  const dislike= () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  }

  return (
    <Comment
      author={<p>{data.author}</p>}
      avatar={
        !dataUser.avarta ? (
          <span className="avarta__icon fas fa-user" />
        ) : (
          <Avatar
            src={dataUser.avarta}
            alt={dataUser.name}
          />
        )
      }
      content={
        <>
          <p>
            { data.content.props.children }
          </p>

          <div className="box-comment-action">
            <Tooltip key="comment-basic-like" title="Like">
              <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
              </span>
            </Tooltip>
            <Tooltip key="comment-basic-dislike" title="Dislike">
              <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
              </span>
            </Tooltip>
            <span key="comment-basic-reply-to" onClick={() => {setIsReply(true)}}>Trả lời</span>

          </div>
          {
            isReply && <ListComments />
          }
        </>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Comments

