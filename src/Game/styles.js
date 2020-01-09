export default {
  body: {
    fontSize: '14px',
    fontFamily: 'Century Gothic, Futura, sans-serif',
    margin: '20px',
  },
  ol: {
    paddingLeft: '30px',
  },
  ul: {
    paddingLeft: '30px',
  },
  boardRow: {
    '&:after': {
      clear: 'both',
      content: '',
      display: 'table',
    },
  },
  status: {
    marginBottom: '10px',
  },
  square: {
    background: '#fff',
    border: '1px solid #999',
    float: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '34px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: 0,
    textAlign: 'center',
    width: '34px',
    '&:focus': {
      outline: 'none',
    },
  },
  kbdNavigation: {
    background: '#ddd',
    square: {
      '&:focus': {
        background: '#ddd',
      },
    },
  },
  game: {
    display: 'flex',
    flexDirection: 'row',
  },
  gameInfo: {
    marginLeft: '20px',
  },
};