import React from 'react'

import { Alert } from '@/index'

function AlertTest() {
  return (
    <div>
      <Alert className="mgb20" message="这是个消息" type="success" description="束带结发了桑德菲杰圣诞节疯狂水电费"/>
      <Alert className="mgb20" message="这是个消息" type="error" description="束带结发了桑德菲杰圣诞节疯狂水电费"/>
    </div>
  )
}

export default AlertTest
