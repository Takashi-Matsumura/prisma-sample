"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const TitleCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 30 * 1000); // 更新間隔を30秒に設定

    return () => {
      clearInterval(timer); // コンポーネントのアンマウント時にタイマーをクリア
    };
  }, []);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="w-full object-cover object-center hidden sm:block"
          component="img"
          image="/title.png"
          alt="welcome image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>
              {currentDate.toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) +
                " " +
                currentDate.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is where the title of the app is displayed, made with
            MaterialUI's Card. The image disappears with responsive support.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TitleCard;
