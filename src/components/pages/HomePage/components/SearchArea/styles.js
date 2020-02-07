export default (theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    marginTop: '2rem',
    marginBottom: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: { padding: 10 },
  divider: {
    height: 28,
    margin: 4,
  },
  showingText: { width: 300 },
});
