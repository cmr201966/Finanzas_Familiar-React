import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, IconButton, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
export default function NavBar({ username = "Usuario" }) {
  const [anchorUser, setAnchorUser] = useState(null);
  const [anchorMoney, setAnchorMoney] = useState(null);
  const [anchorMore, setAnchorMore] = useState(null);
  const [anchorLang, setAnchorLang] = useState(null);
  const { t,i18n } = useTranslation();
  // Estado para bandera actual
  const [flagIcon, setFlagIcon] = useState("/img/flags/spain.png");

  const navigate = useNavigate();

  const handleOpen = (setter) => (event) => setter(event.currentTarget);
  const handleClose = (setter) => () => setter(null);

  const opcion1 = () => alert(username);
  const opcion2 = () => navigate("/register");
  const opcion3 = () => alert("Categorías");
  const opcion4 = () => alert("Cuentas");
  const opcion5 = () => alert("Transacciones");
  const opcion6 = () => alert("Transferencias");
  const opcion7 = () => alert("Dinero");

  const opcion11 = () => {
    i18n.changeLanguage('es');
    setFlagIcon("/img/flags/spain.png");
  };

  const opcion12 = () => {
    i18n.changeLanguage('en');
    setFlagIcon("/img/flags/uk.png");
  };

  return (
    <nav>
      <div className="barra">
        {/* Logo y título */}
        <div className="logo-titulo">
          <img className="logo" src="/assets/img/Logo/logo.jpg" alt="Logo" />
          <h1 className="titulo">{t('titulo')}</h1>
        </div>

        {/* Menú Usuario */}
        <IconButton
          onClick={handleOpen(setAnchorUser)}
          sx={{
            width: '2rem',
            height: '2rem',
            bgcolor: 'white',
            borderRadius: '50%',
            marginBottom: '0rem',
            marginRight: '5rem',
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AccountCircleIcon htmlColor="rgb(12, 155, 80)" />
        </IconButton>
        <Menu anchorEl={anchorUser} open={Boolean(anchorUser)} onClose={handleClose(setAnchorUser)}>
          <MenuItem onClick={() => { opcion1(); handleClose(setAnchorUser)(); }}>
            <ListItemText>{username}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => { opcion2(); handleClose(setAnchorUser)(); }}>
            <ListItemText>{t("perfilEdit")}</ListItemText>
          </MenuItem>
        </Menu>

        {/* Menú Dinero */}
        <IconButton
          onClick={handleOpen(setAnchorMoney)}
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            width: '2.5vw',
            height: '2.5vw',
            display: 'flex',
            alignItems: 'center',
            marginRight: '5rem',
            justifyContent: 'center',
            ml: 1,
            color: 'black',
            p: 0,
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: '#e0e0e0',
            }
          }}
        >
          <AttachMoneyIcon htmlColor="black" />
        </IconButton>
        <Menu anchorEl={anchorMoney} open={Boolean(anchorMoney)} onClose={handleClose(setAnchorMoney)}>
          <MenuItem onClick={() => { opcion7(); handleClose(setAnchorMoney)(); }}>
            <ListItemText>{t("dinero")}</ListItemText>
          </MenuItem>
        </Menu>

        {/* Menú Más */}
        <IconButton
          onClick={handleOpen(setAnchorMore)}
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            width: '2.5vw',
            height: '2.5vw',
            marginRight: '5rem',
            color: 'black',
            ml: 1,
            p: 0,
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: '#e0e0e0',
            }
          }}
        >
          <MoreVertIcon htmlColor="black" />
        </IconButton>
        <Menu anchorEl={anchorMore} open={Boolean(anchorMore)} onClose={handleClose(setAnchorMore)}>
          <MenuItem onClick={() => { opcion3(); handleClose(setAnchorMore)(); }}>
            <ListItemText>{t("categoriaM")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => { opcion4(); handleClose(setAnchorMore)(); }}>
            <ListItemText>{t("cuentasM")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => { opcion5(); handleClose(setAnchorMore)(); }}>
            <ListItemText>{t("transaccionesM")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => { opcion6(); handleClose(setAnchorMore)(); }}>
            <ListItemText>{t("transferenciasM")}</ListItemText>
          </MenuItem>
        </Menu>

        {/* Menú Idioma con bandera */}
        <IconButton
          onClick={handleOpen(setAnchorLang)}
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            width: '2.5vw',
            height: '2.5vw',
            p: 0,
            ml: 1,
            marginRight: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: '#e0e0e0',
            }
          }}
        >
          <img src={flagIcon} alt="Bandera" style={{ width: '60%', height: '60%', borderRadius: '50%' }} />
        </IconButton>
        <Menu anchorEl={anchorLang} open={Boolean(anchorLang)} onClose={handleClose(setAnchorLang)}>
          <MenuItem onClick={() => { opcion11(); handleClose(setAnchorLang)(); }}>
            <ListItemText>{t("español")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => { opcion12(); handleClose(setAnchorLang)(); }}>
            <ListItemText>{t("ingles")}</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
