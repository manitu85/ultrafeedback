import React, { useState } from 'react';
import { mutate } from 'swr';

import { Box, Code, Switch } from '@chakra-ui/react';
import { Td } from './Table';
import DeleteFeedbackButton from './DeleteFeedbackButton';

import { useAuth } from '@/lib/auth';
import { updateFeedback } from '@/lib/firestore';


const FeedbackRow = ({ id, author, text, route, status }) => {
  const auth = useAuth();
  const isChecked = status === 'active';

  const toggleFeedback = async () => {
    await updateFeedback(id, { status: isChecked ? 'pending' : 'active' });
    mutate(['/api/feedback', auth.user.token]);
  };

  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code
          maxW="150px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
          display="inherit"
        >
          {route || '/'}
        </Code>
      </Td>
      <Td>
        <Switch
          colorScheme="teal"
          onChange={toggleFeedback}
          isChecked={isChecked} />
      </Td>
      <Td>
        <DeleteFeedbackButton feedbackId={id} />
      </Td>
    </Box>
  );
};

export default FeedbackRow;