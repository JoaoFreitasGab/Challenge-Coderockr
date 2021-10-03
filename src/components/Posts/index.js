import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useApi from '../Posts/utils/useApi';



const initialValue = {
  author: '',
  url: '',
  imageUrl: '',

};

const Posts = ({ id }) => {
  const history = useHistory();
  const [load, loadInfo] = useApi({
    url: `/posts/${id}`,
    method: 'get',
  });

  const [save, saveInfo] = useApi({
    url: id ? `/posts/${id}` : '/posts',
    method: id ? 'put' : 'post',
    onCompleted: (response) => {
      if (!response.error) {
        history.push('/');
      }
    },
  });

  useEffect(() => {
    if (id) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  

  const values = id ? loadInfo.data : initialValue;

  return (
    <div>
    <div>{id.author}</div>
    </div>
  );
};

export default Posts;
