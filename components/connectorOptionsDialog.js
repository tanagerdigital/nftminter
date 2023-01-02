import CloseIcon from '@mui/icons-material/Close'
import { Dialog } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Image from 'next/image'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import style from './connectorOptionsDialog.module.css'

const theme = createTheme({
  components: {
    // Name of the component
    MuiDialog: {
      styleOverrides: {
        // Name of the slot
        paper: {
          backgroundColor: '#DBFDE3',
          border: '3px solid #000000',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 20,
        },
      },
    },
  },
})

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 20,
            top: 20,
            color: (theme) => theme.palette.black,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

export default function ConnectorOptionsDialog(props) {
  const { open, onClose } = props

  const { isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const handleClick = (index) => {
    if (isConnected) {
      disconnect()
    } else {
      const connector = connectors[index]
      console.log('connector:', connector)
      connect({ connector })
    }
    onClose()
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog maxWidth="true" open={open} onClose={onClose}>
        <BootstrapDialogTitle className={style.title} onClose={onClose}>
          Connect a wallet
        </BootstrapDialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <button className={style.option} onClick={() => handleClick(0)}>
              <Image
                src="/nftminter/images/Metamask.png"
                alt=""
                width="66"
                height="66"
              />
              <span>MetaMask</span>
            </button>
            <button className={style.option} onClick={() => handleClick(1)}>
              <Image
                src="/nftminter/images/Coinbase.png"
                alt=""
                width="66"
                height="66"
              />
              <span>Coinbase Wallet</span>
            </button>
            <button className={style.option} onClick={() => handleClick(2)}>
              <Image
                src="/nftminter/images/WalletConnect.png"
                alt=""
                width="66"
                height="66"
              />
              <span>WalletConnect</span>
            </button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}
