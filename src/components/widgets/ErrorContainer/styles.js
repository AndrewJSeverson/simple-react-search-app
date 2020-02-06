export default (theme) => ({
  close: { padding: theme.spacing(1) / 2 },
  snackbar: { backgroundColor: theme.palette.error.dark },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});
