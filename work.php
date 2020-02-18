<!doctype html>
<html lang="en">
<head>
    <?php include('templates/head.php');?>
    <title>Alx García | Portfolio</title>
</head>

<body>
    <?php include('templates/header.php');?>
    <style>
    .logo-a {
        fill: white;
    }
    </style>
    <main>
        <section class="cover pb-0">
            <div id="portfolioWorks" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 text-center height350">
                                    <img src="assets/work/wingu/winguLogo.png" class="img-fluid" id="wingu" alt="Wingu Networks">
                                    <h3>ReBranding - Corporate Identity</h3>
                                    <h4>Wingu Networks - 2019</h4>
                                    <a href="work/wingu-networks.php" class="btn btn-line workBtn">See work</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 text-center height350">
                                    <img src="assets/work/smarteating/logoavocado@2x.png" class="img-fluid" id="smart" alt="Smart Eating">
                                    <h3>Brand - Corporate Identity</h3>
                                    <h4>Smart Eating - 2019</h4>
                                    <a href="work/smart_eating.php" class="btn btn-line workBtn">See work</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 text-center height350">
                                    <img src="assets/work/ekco/logoekco@2x.jpg" class="img-fluid" id="Ekco" alt="EKCO Pregressive">
                                    <h3>Redesign Web Site</h3>
                                    <h4>Ekco Progressive - 2019</h4>
                                    <a href="work/ekco.php" class="btn btn-line workBtn">See work</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <a class="carousel-control-prev" href="#portfolioWorks" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#portfolioWorks" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
        </section>
    </main>
    <?php include('templates/footer.php');?>
    <?php include('templates/scripts.php');?>
</body>
</html> 