import React, { useState, useEffect } from'react'
import { Comment, Avatar, Form, Button, Input } from 'antd';
import { fetchUser } from '../../../redux/loginSlice'
import { fetchComments } from '../../../redux/commentsSlice'
import { setStatusLogin } from '../../../redux/statusLoginSlice'
import moment from 'moment';
import Comments from './Comments'
import { useSelector, useDispatch } from 'react-redux'
import { customAxiosApi } from '../../../reuse/CustomAxios'
import { API_NAME } from '../../../dataConst'

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Gửi bình luận
      </Button>
    </Form.Item>
  </>
);

const ListComments = ({ idProduct }) => {
  const dispatch = useDispatch()
  const [comments, setComments] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [value, setValue] = useState('')
  const [dataUser, setDataUser] = useState({})
  const tokenId = useSelector(state => state.login.token)
  const [isReply, setIsReply] = useState(true)
  const [dataCommentProduct, setDataCommentProduct]= useState([])

  useEffect(() => {
    dispatch(fetchComments())
    .then(res => {
      const result = res.payload
      const newData = result.filter(ele => ele.productsID === idProduct)

      setDataCommentProduct(newData);
    })
  }, [dispatch, idProduct])

  useEffect(() => {
    const id = sessionStorage.getItem('id')

    if (id || tokenId) {
      dispatch(fetchUser(id || tokenId))
      .then(response => {
        const data = response.payload

        setDataUser(data)
      })
    }
  }, [tokenId, dispatch])

  useEffect(() => {
    if (dataCommentProduct) {
      const newData = []
      dataCommentProduct.forEach(item => {
        newData.push(
          {
            author: item.users.name,
            avatar: item.users.avarta,
            content: <p>{item.title}</p>,
            datetime: item.created_at,
            like: item.like,
            desLike: item.desLike || 0
          }
        )
      })

      setComments(newData)
    }
  }, [dataCommentProduct])

  const handleSubmit = () => {
    const id = sessionStorage.getItem('id')
    if (!id) {
      dispatch(setStatusLogin(true))
      return;
    }

    if (!value) {
      return;
    }

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setValue('')
      setComments([
        ...comments,
        {
          author: dataUser.name,
          avatar: '',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
          like: 0,
          desLike: 0
        },
      ])
      setIsReply(false)
      const id = sessionStorage.getItem('id')
      const newData = {
        statusCommentsID: 1,
        usersID: id,
        productsID: 30,
        title: value,
        like: 0,
        desLike: 0
      }
      customAxiosApi.post(`${API_NAME.COMMENTS}`, newData)
      .then(res => {
        console.log(res);
      })
      .catch(() => { console.log('aaaa');})
    }, 1000);
  };

  const handleChange = e => {
    const { value } = e.target
    setValue(value)
  };

    return (
      <>
        {
          comments.length > 0 &&
          comments.map((item, index) => (
            <Comments data={item} key={index} dataUser={dataUser} setIsReply={setIsReply} isReply={isReply} />
          ))
        }

        {
          isReply &&
          <Comment
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
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        }
      </>
    );
  }

export default ListComments
