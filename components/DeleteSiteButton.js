import React, { useState, useRef } from 'react';
import { mutate } from 'swr';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'

import { deleteSite } from '@/lib/firestore';
import { useAuth } from '@/lib/auth';

const DeleteSiteButton = ({ siteId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const auth = useAuth();

  // const onClose = () => setIsOpen(false);
  const onDelete = () => {
    deleteSite(siteId);
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => {
        return {
          sites: data.sites.filter((site) => site.id !== siteId)
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Delete site"
        icon={<DeleteIcon />}
        color="red.300"
        variant="ghost"
        onClick={onOpen}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Site
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? This will also delete all feedback left on the site.
            You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              fontWeight="bold"
              color="white"
              bg="red.500"
              onClick={onDelete}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteSiteButton;