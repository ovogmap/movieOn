import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingContainder } from './Loadingstyle'
export default () => {
  return (
    <LoadingContainder>
      <CircularProgress color="secondary" />
    </LoadingContainder>
  )
}