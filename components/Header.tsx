import {
  AppBar,
  Toolbar,
  styled,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar className="header" position="sticky">
      <StyledToolbar>
        <LeftNavbar>
          <Link href="/">
            <a>Papel</a>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <InputWrapper>
              <InputBase placeholder="검색어를 입력해주세요" />
            </InputWrapper>
          </Search>
        </LeftNavbar>
        <RightNavbar>
          <Link href="">
            <a>메뉴1</a>
          </Link>
          <Link href="">
            <a>메뉴2</a>
          </Link>
          <Link href="">
            <a>메뉴3</a>
          </Link>
        </RightNavbar>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled('div')({
  backgroundColor: '#f8f9fa',
  display: "flex",
  justifyContent: "space-between",
  padding: '5px 25px'
});

const LeftNavbar = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 15,

  "a": {
    fontSize: 18
  }
});

const RightNavbar = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 15,
});

const Search = styled("div")(({ theme }) => ({
  "position": "relative",
  "padding": "3px 30px",
  "borderRadius": theme.shape.borderRadius,
  "backgroundColor": "#f1f3f5",
  "height": "fit-content",
  "& button": {
    top: 3,
    left: 3,
    height: "85%",
  },
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  padding: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const InputWrapper = styled("div")({
  paddingLeft: "10px",
});

export default Header;
