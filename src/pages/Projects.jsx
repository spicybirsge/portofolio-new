import SideBar from "../components/SideBar";
import { Card, Row, Col, Typography, Badge, Divider , } from 'antd';

const { Meta } = Card;

export default function Projects() {
    const element = <>
        <Typography.Paragraph strong>Some of my Projects</Typography.Paragraph>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
               <Badge.Ribbon text="discontinued" color="yellow"> <Card
               actions={[
               
                <Typography.Text ><a href="https://notehubapp.tech" target="_blank">Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/notehub.png"} />}
                >
                    <Meta title="NoteHub" description="NoteHub is a website where you can create, manage and share all your notes in one platform." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="discontinued" color="yellow"> <Card
               actions={[
               
                <Typography.Text ><a href="https://github.com/curiopost" target="_blank">Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/curiopost.png"} />}
                >
                    <Meta title="Curiopost" description="Curiopost was a social media platform where you could post, ask questions, etc." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="Under developement" color="green"> <Card
               actions={[
               
                <Typography.Text ><a href="https://github.com/GlymphApp" target="_blank" >Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/glymph.png"} />}
                >
                    <Meta title="Glymph" description="Glymph is an app which is underdevelopement. It is aimed to provide a new way to host communities." />
                    
                </Card></Badge.Ribbon>
            </Col>
        </Row>
        <Divider></Divider>

        <Typography.Paragraph>I have even more projects, please can refer my <a href="https://github.com/spicybirsge" target="_blank">github</a> for them.</Typography.Paragraph>
    </>;

    return <SideBar element={element} />;
}
