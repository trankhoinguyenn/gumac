import "./Main.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { BsHeart } from "react-icons/bs";
import ImageItem from "./ImageItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Main() {
	return (
		<main>
			<Container className="slider" fluid>
				<div className="slide">
					<Card.Img src="../image/1600x635-2.jpg"></Card.Img>
				</div>
			</Container>
			<Container fluid className="mt-4 d-flex justify-content-center">
				<Card
					style={{ backgroundImage: `url("../image/ticket.png")`, backgroundSize: "cover" }}
					className="m-4 d-flex flex-row justify-content-center align-items-center"
				>
					<Card.Body className="text-white fw-bold fs-4 text-center ms-2" style={{ width: "146px" }}>
						GIẢM 30K
					</Card.Body>
					<Card.Body style={{ fontSize: "13px", width: "285px" }} className="ms-3">
						<Card.Title className="fw-bold fs-6 text-uppercase">VOUCHER 30K</Card.Title>
						<Card.Text className="fw-lighter">VOUCHER MUA HÀNG 30K ÁP DỤNG CHO TẤT CẢ ĐƠN HÀNG</Card.Text>
						<Button className="rounded-pill fw-bold" variant="dark">
							COPY MÃ
						</Button>
					</Card.Body>
				</Card>
				<Card
					style={{ backgroundImage: `url("../image/ticket.png")`, backgroundSize: "cover" }}
					className="m-4 d-flex flex-row justify-content-center align-items-center"
				>
					<Card.Body className="text-white fw-bold fs-4 text-center ms-2" style={{ width: "146px" }}>
						GIẢM 50K
					</Card.Body>
					<Card.Body style={{ fontSize: "13px", width: "285px" }}>
						<Card.Title className="fw-bold fs-6 text-uppercase">VOUCHER 50K</Card.Title>
						<Card.Text style={{ fontSize: "13px" }}>
							VOUCHER MUA HÀNG 50K ÁP DỤNG CHO ĐƠN HÀNG TỪ 300K
						</Card.Text>
						<Button className="rounded-pill fw-bold" variant="dark">
							COPY MÃ
						</Button>
					</Card.Body>
				</Card>
			</Container>
			<Container fluid>
				<Row md={3} className="justify-content-md-center">
					<Col className="img-container" style={{ width: "432px", height: "189px" }}>
						<Card.Img src="../image/artboard-1-1.jpg" />
					</Col>
					<Col className="img-container" style={{ width: "432px", height: "189px" }}>
						<Card.Img src="../image/artboard-2-1.jpg" />
					</Col>
					<Col className="img-container" style={{ width: "432px", height: "189px" }}>
						<Card.Img src="../image/artboard-3-1.jpg" />
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row md={4} className="justify-content-md-center">
					<Col className="d-flex flex-column" style={{ width: "19%" }}>
						<Image src="../image/1-3.png" style={{ width: "69px", height: "69px" }} />
						<span
							className="text-uppercase fw-bold fs-5"
							style={{ marginBottom: "0.4375rem", marginTop: "1rem" }}
						>
							freeship
						</span>
						<span className="fw-lighter fs-6">Miễn Phí Vận Chuyển Cho Đơn Hàng Từ 500K</span>
					</Col>
					<Col className="d-flex flex-column" style={{ width: "19%" }}>
						<Image src="../image/1-3.png" style={{ width: "69px", height: "69px" }} />
						<span
							className="text-uppercase fw-bold fs-5"
							style={{ marginBottom: "0.4375rem", marginTop: "1rem" }}
						>
							ĐỔI HÀNG TRONG VÒNG 15 NGÀY
						</span>
						<span className="fw-lighter fs-6">Hỗ Trợ Đổi Hàng Trong 15 Ngày</span>
					</Col>
					<Col className="d-flex flex-column" style={{ width: "19%" }}>
						<Image src="../image/1-3.png" style={{ width: "69px", height: "69px" }} />
						<span
							className="text-uppercase fw-bold fs-5"
							style={{ marginBottom: "0.4375rem", marginTop: "1rem" }}
						>
							CHÍNH SÁCH TÍCH ĐIỂM
						</span>
						<span className="fw-lighter fs-6">Áp Dụng Tích Điểm Cho Tất Cả Đơn Hàng</span>
					</Col>
					<Col className="d-flex flex-column" style={{ width: "19%" }}>
						<Image src="../image/1-3.png" style={{ width: "69px", height: "69px" }} />
						<span
							className="text-uppercase fw-bold fs-5"
							style={{ marginBottom: "0.4375rem", marginTop: "1rem" }}
						>
							TƯ VẤN LỰA CHỌN VÀ MẶC ĐỒ
						</span>
						<span className="fw-lighter fs-6">Đội Ngũ Tư Vấn Tận Tình</span>
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row lg={1}>
					<Col className="d-flex justify-content-center align-items-center">
						<Image className="d-flex" src="../image/banner-phu.jpg" />
					</Col>
					<Col className="mt-3">
						<Row md={2} className="justify-content-md-center">
							<Col className="img-container img-item m-2 mt-4">
								<Card.Img src="../image/artboard-1-2.jpg" />
							</Col>
							<Col className="img-container m-2 img-item">
								<Card.Img src="../image/artboard-2-2.jpg" />
							</Col>
							<Col className="img-container m-2 mt-4 img-item">
								<Card.Img src="../image/artboard-3-2.jpg" />
							</Col>
							<Col className="img-container m-2 img-item">
								<Card.Img src="../image/artboard-4.jpg" />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col className="d-flex align-items-center">
						<Row md={1}>
							<Col className="d-flex justify-content-center align-items-center">
								<Card.Img
									style={{
										width: "181px",
										height: "278px",
										borderRadius: "62.4375rem",
										overflow: "hidden",
									}}
									src="../image/0-DEN-AD10040.png"
								/>
								<div className="d-flex flex-column ms-4">
									<span className="fs-5 w-75" style={{ cursor: "pointer" }}>
										Áo Blazer dáng suông AD10040
									</span>
									<span className="fs-6 fw-light text-secondary mt-2" style={{ cursor: "pointer" }}>
										Áo Vest & Blazer
									</span>
									<span className="fs-4 mt-3" style={{ cursor: "pointer" }}>
										855.000 đ
									</span>
									<div className="d-flex align-items-center mt-3">
										<Button
											variant="outline"
											className="rounded-pill btn-container"
											style={{
												border: "1px solid #00aeef",
												color: "#00aeef",
												width: "100px",
											}}
										>
											Mua ngay
										</Button>
										<BsHeart
											className="ms-3"
											style={{
												color: "#00aeef",
												cursor: "pointer",
												width: "25px",
												height: "25px",
											}}
										/>
									</div>
								</div>
							</Col>
							<Col className="d-flex justify-content-center align-items-center mt-4">
								<Card.Img
									style={{
										width: "181px",
										height: "278px",
										borderRadius: "62.4375rem",
										overflow: "hidden",
									}}
									src="../image/0-DEN-QD10016.png"
								/>
								<div className="d-flex flex-column ms-4">
									<span className="fs-5 w-75" style={{ cursor: "pointer" }}>
										Quần ống suông xếp ly QD10016
									</span>
									<span className="fs-6 fw-light text-secondary mt-2" style={{ cursor: "pointer" }}>
										Quần Tây Ống Suông
									</span>
									<span className="fs-4 mt-3" style={{ cursor: "pointer" }}>
										445.500 đ
									</span>
									<div className="d-flex align-items-center mt-3">
										<Button
											variant="outline"
											className="rounded-pill btn-container"
											style={{
												border: "1px solid #00aeef",
												color: "#00aeef",
												width: "100px",
												cursor: "pointer",
											}}
										>
											Mua ngay
										</Button>
										<BsHeart
											className="ms-3"
											style={{
												color: "#00aeef",
												cursor: "pointer",
												width: "25px",
												height: "25px",
											}}
										/>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
					<Col>
						<div style={{ position: "relative" }}>
							<div className="p-homeCollectionFirst_info">
								<Row md={1}>
									<Col className="fw-bold homeCollectionFirst_info">HER GLOW</Col>
									<Col className="d-flex align-items-center p-homeCollectionFirst">
										<Card.Img src="../image/ic_arrow_blue.svg" className="ic-arrow" />
										<span className="buttonIcon_text">XEM NGAY BỘ SƯU TẬP</span>
									</Col>
								</Row>
							</div>
							<div>
								<Card.Img style={{ marginLeft: "100px" }} src="../image/1.png" />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Container className="mt-4">
				<Row md={5}>
					<Col className="p-2">
						<Card border="info">
							<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
								<Card.Img style={{ width: "13%" }} src="../image/shirt.png" />
								<Card.Text className="fw-lighter">Áo Sơ Mi Họa Tiết</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col className="p-2">
						<Card border="info">
							<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
								<Card.Img style={{ width: "13%" }} src="../image/shirt.png" />
								<Card.Text className="fw-lighter">Áo Sơ Mi Tay Dài</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col className="p-2">
						<Card border="info">
							<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
								<Card.Img style={{ width: "13%" }} src="../image/shirt.png" />
								<Card.Text className="fw-lighter">Áo Sơ Mi Tay Ngắn</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col className="p-2">
						<Card border="info">
							<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
								<Card.Img style={{ width: "13%" }} src="../image/shirt.png" />
								<Card.Text className="fw-lighter">Áo Sơ Mi Kiểu</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col className="p-2">
						<Card border="info">
							<Card.Body className="d-flex flex-column justify-content-center align-items-center slick-slide">
								<Card.Img style={{ width: "13%" }} src="../image/shirt.png" />
								<Card.Text className="fw-lighter">Áo Sơ Mi Cổ Vest</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Container className="mt-5">
				<Row xxl={5}>
					<ImageItem
						url1="../image/0-DEN-AD10025.png"
						url1Change="../image/1-DEN-AD10025.png"
						url2="../image/MAU-DEN-AD10025.png"
						name1="Áo kiểu thắt nơ"
						name2="AD10025"
						price="330.000 đ"
						priceDiscount="297.000 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-AD10028.png"
						url1Change="../image/1-HONG-AD10028.png"
						url2="../image/MAU-HONG-AD10028.png"
						name1="Áo kiểu lệch vai"
						name2="AD10028"
						price="375.000 đ"
						priceDiscount="337.500 đ"
					/>
					<ImageItem
						url1="../image/0-DEN-AD10052.png"
						url1Change="../image/1-DEN-AD10052.png"
						url2="../image/MAU-DEN-AD10052.png"
						name1="Áo sơ mi thắt nơ"
						name2="AD10052"
						price="430.000 đ"
						priceDiscount="387.000 đ"
					/>
					<ImageItem
						url1="../image/0-TRANG-AD10024.png"
						url1Change="../image/1-TRANG-AD10024.png"
						url2="../image/MAU-TRANG-AD10024.png"
						name1="Áo kiểu viền bèo"
						name2="AD10024"
						price="430.000 đ"
						priceDiscount="387.000 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AD08005/3-TRANG-AD08005.jpg"
						url1Change="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AD08005/2-TRANG-AD08005.jpg"
						url2="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/VD10060/MAU-TRANG-VD10060.png"
						name1="Áo sơ mi nẹp nút"
						name2="AD08005"
						price="375.000 đ"
						priceDiscount="199.000 đ"
					/>
					<ImageItem
						url1="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QD09039/2-DEN-QD09039.jpg"
						url1Change="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QD09039/3-DEN-QD09039.jpg"
						url2="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AD10020/MAU-HONG-AD10020.png"
						name1="Quần tây cơ bản túi xéo"
						name2="QD09039"
						price="385.000 đ"
						priceDiscount="259.000 đ"
					/>
					<ImageItem
						url1="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/LQD1102/2-DEN-LQD1102.jpg"
						url1Change="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/LQD1102/3-DEN-LQD1102.jpg"
						url2="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AD10030/MAU-BE-AD10030.png"
						name1="Quần tây cơ bản"
						name2="LQD1102"
						price="430.000 đ"
						priceDiscount="279.000 đ"
					/>
					{/* <ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/>
					<ImageItem
						url1="../image/0-HONG-VD10049.png"
						url1Change="../image/1-HONG-VD10049.png"
						url2="../image/MAU-HONG-VD10049.png"
						name1="Chân váy bút chì kiểu"
						name2="VD10049"
						price="495.000 đ"
						priceDiscount="445.500 đ"
					/> */}
				</Row>
			</Container>
			<Container className="mt-3" style={{ marginBottom: "3rem" }}>
				<div className="d-flex flex-row">
					<Card.Img
						style={{ width: "700px", height: "400px" }}
						className="rounded-3"
						src="../image/post-01.jpg"
					/>
					<div className="d-flex flex-column ps-4">
						<Card.Img className="rounded-3" src="../image/post-02.jpg" />
						<Card.Img className="rounded-3 mt-3" src="../image/post-03.jpg" />
					</div>
				</div>
			</Container>
		</main>
	);
}
